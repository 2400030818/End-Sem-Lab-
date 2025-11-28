import Head from "next/head";
export default function DepartmentPage({ department, faculty }) {
  return (
    <>
      <Head>
        <title>{department.name} | KL University</title>
        <meta
          name="description"
          content={`Department of ${department.name} at KL University`}
        />
      </Head>

      <main style={styles.main}>
        {/* Department details */}
        <section style={styles.card}>
          <h1 style={styles.heading}>{department.name}</h1>
          <p style={styles.text}>
            <strong>University:</strong> {department.university}
          </p>
          <p style={styles.text}>
            <strong>Location:</strong> {department.location}
          </p>
          <p style={styles.text}>
            <strong>Contact:</strong> {department.phone} |{" "}
            <a href={`mailto:${department.email}`} style={styles.link}>
              {department.email}
            </a>
          </p>
        </section>

        {/* Faculty table */}
        <section style={styles.card}>
          <h2 style={styles.subHeading}>Faculty Details</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Designation</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
              </tr>
            </thead>
            <tbody>
              {faculty.map((member) => (
                <tr key={member.email}>
                  <td style={styles.td}>{member.name}</td>
                  <td style={styles.td}>{member.designation}</td>
                  <td style={styles.td}>
                    <a href={`mailto:${member.email}`} style={styles.link}>
                      {member.email}
                    </a>
                  </td>
                  <td style={styles.td}>{member.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

// Static data fetched at build time
export async function getStaticProps() {
  const department = {
    name: "Department of Computer Science & Engineering",
    university: "KL University",
    location: "Vaddeswaram, Andhra Pradesh, India",
    phone: "+91-12345 67890",
    email: "cse@kluniversity.in",
  };

  const faculty = [
    {
      name: "Dr. A. Kumar",
      designation: "Professor & HOD",
      email: "akumar@kluniversity.in",
      phone: "+91-90000 00001",
    },
    {
      name: "Dr. B. Sharma",
      designation: "Associate Professor",
      email: "bsharma@kluniversity.in",
      phone: "+91-90000 00002",
    },
    {
      name: "Ms. C. Reddy",
      designation: "Assistant Professor",
      email: "creddy@kluniversity.in",
      phone: "+91-90000 00003",
    },
    {
      name: "Mr. D. Rao",
      designation: "Assistant Professor",
      email: "drao@kluniversity.in",
      phone: "+91-90000 00004",
    },
  ];

  return {
    props: {
      department,
      faculty,
    },
    // Optional: ISR – can be removed if you want pure static
    // revalidate: 86400, // seconds (24 hours)
  };
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "#f4f4f5",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  card: {
    background: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  },
  heading: {
    margin: 0,
    fontSize: "1.8rem",
  },
  subHeading: {
    marginTop: 0,
    fontSize: "1.4rem",
  },
  text: {
    margin: "0.25rem 0",
    fontSize: "0.95rem",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
    fontSize: "0.95rem",
  },
  th: {
    textAlign: "left",
    padding: "0.5rem",
    borderBottom: "2px solid #e5e7eb",
  },
  td: {
    padding: "0.5rem",
    borderBottom: "1px solid #e5e7eb",
  },
};
