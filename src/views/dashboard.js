// import app from '../app';

const dashboardName = 'Dashboard';
const projectName = 'Tax Collection';
const startDashboard = async () => {
  const testheader = document.querySelector('[data-project-name]');
  const dashboardHeader = document.querySelector('[data-dashboard]');
  if (!dashboardHeader) {
    return;
  }

  //   const programName = await app();
  testheader.textContent = projectName;
  dashboardHeader.textContent = dashboardName;
};

document.addEventListener('DOMContentLoaded', startDashboard);
