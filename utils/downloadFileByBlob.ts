export const downloadFileByBlob = (blob: Blob, fileName: string) => {
    const aTag = document.createElement('a') as HTMLAnchorElement
    aTag.href = URL.createObjectURL(blob)
    aTag.download = fileName || 'Devsnest'
    document.body.appendChild(aTag)
    aTag.click()
    document.body.removeChild(aTag)
}
