import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: "Java Full Stack Developer", duration: "12 Weeks", rating: "4.8/5" },
    { id: 2, name: "Modern React Development", duration: "6 Weeks", rating: "4.9/5" }
  ];

  return (
    <div style={{ padding: '1rem', background: 'rgba(34, 197, 94, 0.05)', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.1)' }}>
      <h3 style={{ color: '#22c55e', marginTop: 0 }}>🎓 Course Details</h3>
      {courses.map(course => (
        <div key={course.id} style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>
          <h4 style={{ margin: '0 0 0.25rem 0', color: '#f1f5f9' }}>{course.name}</h4>
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem' }}>
            Duration: <strong>{course.duration}</strong> | Rating: <strong>{course.rating}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
