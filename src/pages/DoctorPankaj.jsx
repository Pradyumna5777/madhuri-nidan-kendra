import { Helmet } from "react-helmet-async";

export default function DoctorPankaj() {
  return (
    <div className="p-6 md:p-10">
      <Helmet>
        <title>Dr. Pankaj Kumar Chaurasiya | Madhuri Nidan Kendra</title>
        <meta
          name="description"
          content="Consult Dr. Pankaj Kumar Chaurasiya, Physician & Pediatrician at Madhuri Nidan Kendra, Siwan Hasanpura. Book appointments for expert medical care."
        />
        <meta
          name="keywords"
          content="Dr Pankaj Kumar Chaurasiya, Madhuri Nidan Kendra, Physician, Pediatrician, Doctor in Siwan Hasanpura, Best doctor near me"
        />
        <link
          rel="canonical"
          href="https://madhuri-nidan-kendra.vercel.app/doctors/dr-pankaj-kumar-chaurasiya"
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Pankaj Kumar Chaurasiya",
            "image": "https://madhuri-nidan-kendra.vercel.app/images/pankaj.jpg",
            "medicalSpecialty": ["General Practice", "Pediatrics"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Madhuri Nidan Kendra, Hasanpura",
              "addressLocality": "Siwan",
              "addressRegion": "Bihar",
              "addressCountry": "India"
            },
            "affiliation": {
              "@type": "Organization",
              "name": "Madhuri Nidan Kendra"
            },
            "url": "https://madhuri-nidan-kendra.vercel.app/doctors/dr-pankaj-kumar-chaurasiya",
            "sameAs": [
              "https://madhuri-nidan-kendra.vercel.app",
              "https://maps.google.com"
            ]
          }
          `}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Dr. Pankaj Kumar Chaurasiya
      </h1>
      <p className="text-lg mb-2 font-semibold">Physician & Pediatrician</p>
      <p className="mb-4">B.A.M.S. (Ranchi), C.C.H. (Mumbai)</p>
      <img
        src="/images/pankaj.jpg"
        alt="Dr. Pankaj Kumar Chaurasiya"
        className="w-64 h-64 object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 leading-relaxed">
        Dr. Pankaj Kumar Chaurasiya is a highly experienced Physician and
        Pediatrician practicing at Madhuri Nidan Kendra, Siwan Hasanpura. He
        provides expert consultation and treatment for general health, child
        care, and preventive medicine.
      </p>
    </div>
  );
}
