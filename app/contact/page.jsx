import React from 'react'
import ContactHero from '../components/ContactHero/ContactHero'
import ContactSection from '../components/ContactSection/ContactSection'
import NewsletterSection from '../components/NewsletterSection/NewsletterSection'
import CallToAction from '../components/CTA/CTA'
import FAQSection from '../components/FAQ/FAQsection'

function Contact() {
    return (
        <div id='contact'>
            <ContactHero />
            <ContactSection />
            <NewsletterSection />
            <FAQSection />
            <CallToAction />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-6 text-center">
                ⚡ Always here for questions or collaborations.
            </p>
        </div>
    )
}

export default Contact