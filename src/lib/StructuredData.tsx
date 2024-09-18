import Script from "next/script";

export default function StructuredData() {
  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Nikhil Sahni",
        url: "https://www.nikhilsahni.com",
        jobTitle: "Full Stack Developer",
        description:
          "Full Stack Developer,Software Engineer and Freelancer specializing in React, Next.js,Node js,Python and AI development",
        sameAs: [
          "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEulbulfPd0SQAAAZIFkT9QWHzWbrOaT4RGD-OU8Dw23jSFhyr4MZ-KrKOEZ9ZdhaNXjqUE2Mp9oj7QutyT8OW4zcY6Ls5Dnd6ApA013A8MdV9vFnptv84VPELF30ftYKvOgoU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnikhil-sahni-655518222%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app",
          "https://github.com/nikhilsahni7",
          "https://x.com/Nikhilllsahni",
        ],
        knowsAbout: [
          "Web Development",
          "React",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Software Engineering",
          "AI Development",
          "Freelancing",
          "Problem Solving",
          "Python",
        ],
      })}
    </Script>
  );
}
