import { Helmet } from "react-helmet-async";

export default function DoctorAnita() {
  return (
    <div className="p-6 md:p-10">
      <Helmet>
        <title>Dr. Anita Chaurasiya | Gynecologist | Madhuri Nidan Kendra, Siwan</title>
        <meta
          name="description"
          content="Consult Dr. Anita Chaurasiya, experienced Gynecologist and Obstetrician at Madhuri Nidan Kendra, Hasanpura, Siwan. Expert in women's health, maternity, and reproductive care."
        />
        <meta
          name="keywords"
          content="Dr Anita Chaurasiya, Gynecologist in Siwan, Obstetrician in Hasanpura, Madhuri Nidan Kendra, Women health doctor, Pregnancy specialist, Best lady doctor near me"
        />
        <link
          rel="canonical"
          href="https://madhuri-nidan-kendra.vercel.app/doctors/dr-anita-chaurasiya"
        />

        {/* Structured Data for Google (Schema.org) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Anita Chaurasiya",
            "image": "https://madhuri-nidan-kendra.vercel.app/images/anita.jpg",
            "medicalSpecialty": ["Gynecology", "Obstetrics"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Madhuri Nidan Kendra, Opp. M.H. Nagar Police Station, Hasanpura",
              "addressLocality": "Siwan",
              "addressRegion": "Bihar",
              "postalCode": "841236",
              "addressCountry": "India"
            },
            "affiliation": {
              "@type": "Organization",
              "name": "Madhuri Nidan Kendra"
            },
            "url": "https://madhuri-nidan-kendra.vercel.app/doctors/dr-anita-chaurasiya",
            "sameAs": [
              "https://madhuri-nidan-kendra.vercel.app",
              "https://www.google.com/maps?q=Madhuri+Nidan+Kendra+Hasanpura+Siwan"
            ]
          }
          `}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold text-pink-700 mb-4">
        Dr. Anita Chaurasiya
      </h1>
      <p className="text-lg mb-2 font-semibold">Gynecologist & Obstetrician</p>
      <p className="mb-4">B.A.M.S. (Ranchi), D.G.O. (Mumbai)</p>

      <img
        src="/images/anita.jpg"
        alt="Dr. Anita Chaurasiya"
        className="w-64 h-64 object-cover rounded-xl mb-6 shadow-md"
      />

      <p className="text-gray-700 leading-relaxed">
        Dr. Anita Chaurasiya is a highly skilled Gynecologist and Obstetrician
        practicing at Madhuri Nidan Kendra, Hasanpura, Siwan. With years of
        experience in women’s health, she provides expert care in pregnancy,
        infertility, menstrual disorders, and overall reproductive wellness.
      </p>
    </div>
  );
}
