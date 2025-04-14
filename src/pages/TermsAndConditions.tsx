import { useEffect, useRef } from 'react'

const TermsAndConditions = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const fetchAndInject = async () => {
      try {
        const res = await fetch('https://gjbbbucnydedrqbydwou.supabase.co/storage/v1/object/public/sidekick/legal/T&C_sidekick.html')
        const html = await res.text()

        if (iframeRef.current) {
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document
          if (iframeDoc) {
            iframeDoc.open()
            iframeDoc.write(html)
            iframeDoc.close()
          }
        }
      } catch (err) {
        console.error('Failed to load policy:', err)
      }
    }

    fetchAndInject()
  }, [])

  return (
    <section className="max-w-7xl mx-auto pt-20 px-4 my-10 mb-20">
      <iframe
        ref={iframeRef}
        title="Privacy Policy"
        className="max-w-2xl w-full mx-auto h-svh border border-gray-200 rounded-2xl py-4 mb-20"
      />
    </section>
  )
}

export default TermsAndConditions
