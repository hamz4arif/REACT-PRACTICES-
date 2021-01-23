import React from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../../../assets/images/patient.jpg';
export const DashboardSidebar = () => {
    return(
            	<div class="profile-sidebar">
								<div class="widget-profile pro-widget-content">
									<div class="profile-info-widget">
										<a href="#0" class="booking-doc-img">
											<img src={IMG01} alt="User" />
										</a>
										<div class="profile-det-info">
											<h3>Richard Wilson</h3>
											<div class="patient-details">
												<h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
												<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="dashboard-widget">
									<nav class="dashboard-menu">
										<ul>
											<li class="active">
												<Link to="/patient/dashboard">
													<i class="fas fa-columns"></i>
													<span>Dashboard</span>
												</Link>
											</li>
											<li>
												<Link to="/patient/favourites">
													<i class="fas fa-bookmark"></i>
													<span>Favourites</span>
												</Link>
											</li>
											<li>
												<Link to="/doctor/chat-doctor">
													<i class="fas fa-comments"></i>
													<span>Message</span>
													<small class="unread-msg">23</small>
												</Link>
											</li>
											<li>
												<Link to="/patient/profile">
													<i class="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</Link>
											</li>
											<li>
												<Link to="/patient/change-password">
													<i class="fas fa-lock"></i>
													<span>Change Password</span>
												</Link>
											</li>
											<li>
												<Link to="/">
													<i class="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</Link>
											</li>
										</ul>
									</nav>
								</div>

							</div>
    );
}
export default DashboardSidebar;