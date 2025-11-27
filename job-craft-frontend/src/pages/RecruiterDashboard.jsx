import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import {
  FaPlus,
  FaUsers,
  FaBriefcase,
  FaChartBar,
  FaClipboardList,
  FaCogs,
  FaSignOutAlt,
  FaUserCheck,
} from 'react-icons/fa';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const RecruiterDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');

  // Sample data for dashboard
  const activeJobs = 12;
  const totalApplications = 254;
  const positionsFilled = 8;
  const interviewsScheduled = 15;

  const applicationsByJobTypeData = {
    labels: ['Full-time', 'Part-time', 'Internship', 'Contract'],
    datasets: [
      {
        label: 'Applications',
        data: [120, 60, 40, 34],
        backgroundColor: [
          'rgba(13,110,253,0.75)', // blue
          'rgba(0,123,255,0.6)', // lighter blue
          'rgba(0,198,218,0.75)', // turquoise
          'rgba(108,117,125,0.75)', // gray
        ],
        borderColor: [
          'rgba(13,110,253,1)',
          'rgba(0,123,255,1)',
          'rgba(0,198,218,1)',
          'rgba(108,117,125,1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const applicationsOverTimeData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Applications',
        data: [25, 30, 35, 50, 40, 45, 29],
        backgroundColor: 'rgb(7, 36, 80)',
        borderColor: 'rgb(7, 36, 80)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { enabled: true },
    },
  };

  // State for form inputs
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    jobType: 'Full-time',
    salary: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just alert with form data
    alert(`Job Posted:\n
Title: ${formData.title}\n
Description: ${formData.description}\n
Location: ${formData.location}\n
Job Type: ${formData.jobType}\n
Salary: ${formData.salary}`);
    // Reset form
    setFormData({
      title: '',
      description: '',
      location: '',
      jobType: 'Full-time',
      salary: '',
    });
    setActivePage('dashboard'); // go back to dashboard after post
  };

  // Sidebar menu items
  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: <FaChartBar /> },
    { key: 'postJob', label: 'Post Job', icon: <FaPlus /> },
    { key: 'myJobs', label: 'My Jobs', icon: <FaClipboardList /> },
    { key: 'candidates', label: 'Candidates', icon: <FaUsers /> },
    { key: 'shortlisted', label: 'Shortlisted', icon: <FaUserCheck /> },
    { key: 'settings', label: 'Settings', icon: <FaCogs /> },
    { key: 'logout', label: 'Logout', icon: <FaSignOutAlt /> },
  ];

  // Styles (inline for self-containment)
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: 'rgb(104, 165, 184)',
    },
    sidebar: {
      width: 220,
      backgroundColor: 'rgb(7, 36, 80)',
      color: '#fff',
      padding: 20,
      position: 'fixed',
      height: '100vh',
      top: 0,
      left: 0,
      boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    },
    logo: {
      fontSize: 24,
      marginBottom: 30,
      fontWeight: '700',
      userSelect: 'none',
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: '#fff',
      fontSize: 18,
      textDecoration: 'none',
      padding: '10px 15px',
      borderRadius: 6,
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'background-color 0.3s ease',
    },
    navItemActive: {
      backgroundColor: 'rgb(7, 36, 80)',
    },
    icon: {
      fontSize: 20,
      flexShrink: 0,
    },
    main: {
      flex: 1,
      padding: 30,
      marginLeft: 220,
      overflowY: 'auto',
    },
    heading: {
      fontSize: 28,
      marginBottom: 20,
      color: '#212529',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20,
      marginBottom: 30,
    },
    card: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#0d6efd',
      marginBottom: 8,
    },
    cardValue: {
      fontSize: 28,
      fontWeight: '700',
      color: '#212529',
    },
    chartsContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      marginBottom: 30,
    },
    chartTitle: {
      fontWeight: 600,
      fontSize: 18,
      color: '#333',
      borderBottom: 'rgb(7, 36, 80)',
      paddingBottom: 6,
      marginBottom: 12,
    },
    chartWrapper: {
      position: 'relative',
      height: 180,
      width: '100%',
    },
    form: {
      maxWidth: 600,
      backgroundColor: '#fff',
      padding: 30,
      borderRadius: 10,
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
    },
    formGroup: {
      marginBottom: 20,
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: 6,
      fontWeight: '600',
      fontSize: 14,
      color: '#212529',
    },
    input: {
      padding: 10,
      fontSize: 16,
      borderRadius: 6,
      border: '1px solid #ccc',
      outline: 'none',
      fontFamily: 'inherit',
      resize: 'vertical',
    },
    select: {
      padding: 10,
      fontSize: 16,
      borderRadius: 6,
      border: '1px solid #ccc',
      outline: 'none',
      fontFamily: 'inherit',
      backgroundColor: 'white',
    },
    textarea: {
      minHeight: 100,
    },
    button: {
      backgroundColor: '#007BFF',
      color: 'white',
      padding: '12px 20px',
      fontSize: 16,
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };
const navigate = useNavigate();

  // Render SideBar menu item with active highlight and onClick handler
  const renderMenuItem = (item) => {
    const isActive = activePage === item.key;
    return (
      <div
        key={item.key}
        onClick={() => {
          if (item.key === 'logout') {
            // Handle logout, e.g. clear auth and redirect - for now just alert
           // Clear auth (optional) and navigate
navigate('/');

          } else {
            setActivePage(item.key);
          }
        }}
        style={{
          ...styles.navItem,
          ...(isActive ? styles.navItemActive : {}),
          userSelect: 'none',
        }}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            if (item.key === 'logout') {
              alert('Logout clicked');
            } else {
              setActivePage(item.key);
            }
          }
        }}
        aria-current={isActive ? 'page' : undefined}
      >
        <span style={styles.icon}>{item.icon}</span>
        {item.label}
      </div>
    );
  };

  // Form JSX
  const PostJobForm = (
    <form style={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 style={{ marginBottom: 24, color: '#212529' }}>Post a New Job</h2>

      <div style={styles.formGroup}>
        <label htmlFor="title" style={styles.label}>Job Title</label>
        <input
          type="text"
          id="title"
          name="title"
          style={styles.input}
          value={formData.title}
          onChange={handleInputChange}
          required
          placeholder="e.g. Senior React Developer"
          autoComplete="off"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="description" style={styles.label}>Job Description</label>
        <textarea
          id="description"
          name="description"
          style={{ ...styles.input, ...styles.textarea }}
          value={formData.description}
          onChange={handleInputChange}
          required
          placeholder="Enter detailed job description"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="location" style={styles.label}>Location</label>
        <input
          type="text"
          id="location"
          name="location"
          style={styles.input}
          value={formData.location}
          onChange={handleInputChange}
          required
          placeholder="e.g. New York, Remote"
          autoComplete="off"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="jobType" style={styles.label}>Job Type</label>
        <select
          id="jobType"
          name="jobType"
          style={styles.select}
          value={formData.jobType}
          onChange={handleInputChange}
          required
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="salary" style={styles.label}>Salary (Optional)</label>
        <input
          type="text"
          id="salary"
          name="salary"
          style={styles.input}
          value={formData.salary}
          onChange={handleInputChange}
          placeholder="e.g. $60,000 - $80,000"
          autoComplete="off"
        />
      </div>

      <button type="submit" style={styles.button}>Post Job</button>
    </form>
  );

  // Dashboard JSX (stats + charts)
  const DashboardContent = (
    <>
      <h1 style={styles.heading}>Welcome, Recruiter!</h1>

      <div style={styles.statsGrid} aria-label="Key recruiter metrics">
        <div style={styles.card}>
          <div style={styles.cardTitle}>Active Jobs</div>
          <div style={styles.cardValue}>{activeJobs}</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Applications</div>
          <div style={styles.cardValue}>{totalApplications}</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Positions Filled</div>
          <div style={styles.cardValue}>{positionsFilled}</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Interviews Scheduled</div>
          <div style={styles.cardValue}>{interviewsScheduled}</div>
        </div>
      </div>

      <section style={styles.chartsContainer} aria-label="Recruitment analytics charts">
        <div>
          <div style={styles.chartTitle}>Applications By Job Type</div>
          <div style={styles.chartWrapper}>
            <Pie data={applicationsByJobTypeData} options={pieOptions} />
          </div>
        </div>

        <div>
          <div style={styles.chartTitle}>Applications Over Last 7 Days</div>
          <div style={styles.chartWrapper}>
            <Bar data={applicationsOverTimeData} options={barOptions} />
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>RecruiterPro</h2>
        <nav style={styles.nav} role="navigation" aria-label="Main menu">
          {menuItems.map(renderMenuItem)}
        </nav>
      </aside>
      <main style={styles.main} role="main" tabIndex={-1} aria-live="polite" aria-atomic="true">
        {activePage === 'dashboard' && DashboardContent}
        {activePage === 'postJob' && PostJobForm}
        {/* For other pages like myJobs, candidates etc. you can add placeholders */}
        {['myJobs','candidates','shortlisted','settings'].includes(activePage) && (
          <h1 style={styles.heading}>{activePage.charAt(0).toUpperCase() + activePage.slice(1).replace(/([A-Z])/g, ' $1')}</h1>
        )}
      </main>
    </div>
  );
};

export default RecruiterDashboard;