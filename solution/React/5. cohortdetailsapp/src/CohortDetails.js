import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails() {
  const cohorts = [
    {
      id: 1,
      name: "Java Full Stack Developer",
      program: "Digital Nurture 5.0",
      status: "ongoing",
      startDate: "2026-05-10",
      studentsCount: 45
    },
    {
      id: 2,
      name: "Cloud Application Engineering",
      program: "Digital Nurture 5.0",
      status: "completed",
      startDate: "2026-02-15",
      studentsCount: 30
    },
    {
      id: 3,
      name: "Data Analytics & engineering",
      program: "Digital Nurture 5.0",
      status: "completed",
      startDate: "2026-01-10",
      studentsCount: 50
    },
    {
      id: 4,
      name: "React & Modern Web Apps",
      program: "Digital Nurture 5.0",
      status: "ongoing",
      startDate: "2026-06-01",
      studentsCount: 40
    }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      {cohorts.map(cohort => {
        // Condition: green for ongoing, blue for other statuses
        const headerColor = cohort.status.toLowerCase() === 'ongoing' ? 'green' : 'blue';

        return (
          <div key={cohort.id} className={styles.box}>
            <h3 style={{ color: headerColor, margin: '0 0 1rem 0' }}>
              {cohort.name}
            </h3>
            <dl style={{ margin: 0 }}>
              <dt>Program</dt>
              <dd>{cohort.program}</dd>
              
              <dt>Status</dt>
              <dd style={{ textTransform: 'capitalize' }}>{cohort.status}</dd>
              
              <dt>Start Date</dt>
              <dd>{cohort.startDate}</dd>
              
              <dt>Strength</dt>
              <dd>{cohort.studentsCount} Students</dd>
            </dl>
          </div>
        );
      })}
    </div>
  );
}

export default CohortDetails;
