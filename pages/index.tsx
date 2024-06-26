import {Button} from "@/components/Button";
import {useEffect, useMemo, useState} from "react";
import LoadingIcon from "@/components/Icon/LoadingIcon";
import DownloadIcon from "@/components/Icon/DownloadIcon";
import {downloadFileByBlob} from "@/utils/downloadFileByBlob";
import {useDropzone} from "react-dropzone";
import { useRouter } from "next/router";

const baseStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '40px 60px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#467de3',
    borderStyle: 'dashed',
    backgroundColor: '#edf1f7',
    color: '#467de3',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer'
};

const focusedStyle = {
    borderColor: '#467de3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};
export default function Home() {
    const [csvFile, setCsvFile] = useState<File | null>(null)
    const [status, setStatus] = useState<'process' | 'uploading' | 'fething' | 'dowload'>('process')
    const router = useRouter()

    const { type } = router.query

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        maxFiles: 1,
        multiple: false,
        onDrop: (files) => {
            setCsvFile(files[0])
            setStatus('uploading')
        }
    });

    useEffect(() => {
        if(status === 'uploading'){
            const timer = setTimeout(() => {
                setStatus('fething');
            }, 3000);
            return () => clearInterval(timer);
        }
        if(status === 'fething'){
            const timer = setTimeout(() => {
                setStatus('dowload');
            }, 12000);
            return () => clearInterval(timer);
        }

    }, [status]);

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const ConditionalButton = useMemo(() => {
        switch (status) {
            case "process":
                return (
                    <div {...getRootProps({style})}>
                        <input {...getInputProps()} />
                        <p>Drag and drop CSV file here, or click to select your CSV file</p>
                    </div>
                )
            case "uploading":
                return (<Button disabled><LoadingIcon />Uploading...</Button>)

            case 'fething':
                return (<Button disabled> <LoadingIcon/>Processing your data...</Button>)

            case "dowload":
                return (
                    (<Button onClick={() => {
                        if(!csvFile) return console.error('no file founed to download')

                        const aTag = document.createElement('a') as HTMLAnchorElement
                        aTag.href = '/Output.personalised.sequences.csv'
                        aTag.download = 'Output.personalised.sequences.csv'
                        document.body.appendChild(aTag)
                        aTag.click()
                        document.body.removeChild(aTag)
                    }}><DownloadIcon />Download CSV</Button>)
                )

            default:
                return null

        }
    }, [csvFile, getInputProps, getRootProps, status, style])

    return (
    <div className="flex flex-col gap-8 items-center">
        <div>
            <h1 className="text-[#1e2022] text-5xl font-semibold text-center">Personalised Outreach Sequences For <span className="text-4xl uppercase text-primary-default" style={{
                background: 'linear-gradient(180deg, transparent 82%, rgba(249, 185, 52, 0.3) 0%)'
            }}>{ type || 'Amazon' } Marketing Agency</span></h1>
        </div>

        <div className="text-[#1e2022] flex flex-col items-start">
            <h3 className="text-xl font-medium">Instructions:</h3>
            <ul className="text-base">
                <li>1. Drag and drop/upload your CSV with prospects in the section given below</li>
                <li>2. Make sure you have the necessary fields to generate personalised lines</li>
                <li>3. Leave the screen and come back in a few minutes</li>
                <li>4. Press download and review the output</li>
            </ul>
        </div>
        <div>
            {ConditionalButton}
        </div>
    </div>
  )
}
