export default async function FAQ() {

    const getFAQs = async () => {
        // Simulate a delay of 1 seconds
        await new Promise(resolve => setTimeout(resolve, 1000));

        const resp = await fetch('http://localhost:5000/api/v1/faqs?pageSize=10')
        const faqs = await resp.json()
        return faqs.faqs
    }

    const faqs = await getFAQs()

    return (
        <div>
            {
                faqs.map((faq: any) =>
                    <div>{faq.question}</div>
                )
            }
        </div>
    )
}