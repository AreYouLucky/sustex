import FlipbookViewer from '@/app/_components/ui/flipbook-viewer/flipbook-viewer'
import React from 'react'

const Page = () => {
  return (
    <div className="block min-h-screen">
      <FlipbookViewer pdfUrl='/sustex.pdf' />
    </div>
  )
}

export default Page