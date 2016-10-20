import React, { PropTypes } from 'react'

const notifications = [
  {
    time: "just now",
    className: "label-success",
    icon: "fa-plus",
    title: "New user registered."
  },
  {
    time: "3 mins",
    className: "label-danger",
    icon: "fa-bolt",
    title: "Server #12 overloaded."
  },
  {
    time: "10 mins",
    className: "label-warning",
    icon: "fa-bell-o",
    title: "Server #2 not responding"
  },
  {
    time: "10 mins",
    className: "label-warning",
    icon: "fa-bell-o",
    title: "Server #2 not responding."
  },
  {
    time: "14 hrs",
    className: "label-info",
    icon: "fa-bullhorn",
    title: "Application error"
  },{
    time: "2 days",
    className: "label-danger",
    icon: "fa-bolt",
    title: "Database overloaded 68%."
  }
];

const messages = [
  {
    senderImg: 'styles/layouts/layout3/img/avatar2.jpg',
    senderName: 'Lisa Wong',
    time: 'Just now',
    text: 'Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh...'
  },
  {
    senderImg: 'styles/layouts/layout3/img/avatar3.jpg',
    senderName: 'Richard Doe',
    time: '16 mins',
    text: 'Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh...'
  },
  {
    senderImg: 'styles/layouts/layout3/img/avatar1.jpg',
    senderName: 'Bob Nilson',
    time: '2 hrs',
    text: 'Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh...'
  }
];

const TopMenu = React.createClass({
  renderNotification(notification, i){
    return(
      <li key={i}>
        <a href="javascript:;">
          <span className="time">{notification.time}</span>
          <span className="details">
            <span className={`label label-sm label-icon ${notification.className}`}>
              <i className={`fa ${notification.icon}`} />
            </span> {notification.title} </span>
        </a>
      </li>
    );
  },
  renderMessage(message, i){
    return(
      <li key={i}>
        <a href="#">
          <span className="photo">
            <img src={message.senderImg} className="img-circle" alt /> </span>
          <span className="subject">
            <span className="from"> {message.senderName} </span>
            <span className="time">{message.time} </span>
          </span>
          <span className="message"> {message.text} </span>
        </a>
      </li>
    );
  },
  render () {
    return (
      <div className="top-menu">
        <ul className="nav navbar-nav pull-right">
          {/* BEGIN NOTIFICATION DROPDOWN */}
          {/* DOC: Apply "dropdown-dark" class after "dropdown-extended" to change the dropdown styte */}
          {/* DOC: Apply "dropdown-hoverable" class after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode */}
          {/* DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle class */}
          <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <i className="icon-bell" />
              <span className="badge badge-default"> 7 </span>
            </a>
            <ul className="dropdown-menu">
              <li className="external">
                <h3>
                  <span className="bold">12 pending</span> notifications</h3>
                <a href="page_user_profile_1.html">view all</a>
              </li>
              <li>
                <ul className="dropdown-menu-list scroller" style={{height: 250}} data-handle-color="#637283">
                  {notifications.map((notification, i) => this.renderNotification(notification, i))}
                </ul>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <i className="icon-envelope-open" />
              <span className="badge badge-default"> 4 </span>
            </a>
            <ul className="dropdown-menu">
              <li className="external">
                <h3>You have
                  <span className="bold">7 New</span> Messages</h3>
                <a href="app_inbox.html">view all</a>
              </li>
              <li>
                <ul className="dropdown-menu-list scroller" style={{height: 275}} data-handle-color="#637283">
                  {messages.map((message, i) => this.renderMessage(message, i))}
                </ul>
              </li>
            </ul>
          </li>
          {/* END INBOX DROPDOWN */}
          {/* BEGIN TODO DROPDOWN */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li className="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <i className="icon-calendar" />
              <span className="badge badge-default"> 3 </span>
            </a>
            <ul className="dropdown-menu extended tasks">
              <li className="external">
                <h3>You have
                  <span className="bold">12 pending</span> tasks</h3>
                <a href="app_todo.html">view all</a>
              </li>
              <li>
                <ul className="dropdown-menu-list scroller" style={{height: 275}} data-handle-color="#637283">
                  <li>
                    <a href="javascript:;">
                      <span className="task">
                        <span className="desc">New release v1.2 </span>
                        <span className="percent">30%</span>
                      </span>
                      <span className="progress">
                        <span style={{width: '40%'}} className="progress-bar progress-bar-success" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                          <span className="sr-only">40% Complete</span>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span className="task">
                        <span className="desc">Application deployment</span>
                        <span className="percent">65%</span>
                      </span>
                      <span className="progress">
                        <span style={{width: '65%'}} className="progress-bar progress-bar-danger" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                          <span className="sr-only">65% Complete</span>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span className="task">
                        <span className="desc">Mobile app release</span>
                        <span className="percent">98%</span>
                      </span>
                      <span className="progress">
                        <span style={{width: '98%'}} className="progress-bar progress-bar-success" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}>
                          <span className="sr-only">98% Complete</span>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span className="task">
                        <span className="desc">Database migration</span>
                        <span className="percent">10%</span>
                      </span>
                      <span className="progress">
                        <span style={{width: '10%'}} className="progress-bar progress-bar-warning" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                          <span className="sr-only">10% Complete</span>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span className="task">
                        <span className="desc">Web server upgrade</span>
                        <span className="percent">58%</span>
                      </span>
                      <span className="progress">
                        <span style={{width: '58%'}} className="progress-bar progress-bar-info" aria-valuenow={58} aria-valuemin={0} aria-valuemax={100}>
                          <span className="sr-only">58% Complete</span>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span className="task">
                        <span className="desc">Mobile development</span>
                        <span className="percent">85%</span>
                      </span>
                      <span className="progress">
                        <span style={{width: '85%'}} className="progress-bar progress-bar-success" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                          <span className="sr-only">85% Complete</span>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span className="task">
                        <span className="desc">New UI release</span>
                        <span className="percent">38%</span>
                      </span>
                      <span className="progress progress-striped">
                        <span style={{width: '38%'}} className="progress-bar progress-bar-important" aria-valuenow={18} aria-valuemin={0} aria-valuemax={100}>
                          <span className="sr-only">38% Complete</span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {/* END TODO DROPDOWN */}
          {/* BEGIN USER LOGIN DROPDOWN */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li className="dropdown dropdown-user">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <img alt className="img-circle" src="styles/layouts/layout/img/avatar3_small.jpg" />
              <span className="username username-hide-on-mobile"> Nick </span>
              <i className="fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu dropdown-menu-default">
              <li>
                <a href="page_user_profile_1.html">
                  <i className="icon-user" /> My Profile </a>
              </li>
              <li>
                <a href="app_calendar.html">
                  <i className="icon-calendar" /> My Calendar </a>
              </li>
              <li>
                <a href="app_inbox.html">
                  <i className="icon-envelope-open" /> My Inbox
                  <span className="badge badge-danger"> 3 </span>
                </a>
              </li>
              <li>
                <a href="app_todo.html">
                  <i className="icon-rocket" /> My Tasks
                  <span className="badge badge-success"> 7 </span>
                </a>
              </li>
              <li className="divider"> </li>
              <li>
                <a href="page_user_lock_1.html">
                  <i className="icon-lock" /> Lock Screen </a>
              </li>
              <li>
                <a href="page_user_login_1.html">
                  <i className="icon-key" /> Log Out </a>
              </li>
            </ul>
          </li>
          {/* END USER LOGIN DROPDOWN */}
          {/* BEGIN QUICK SIDEBAR TOGGLER */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li className="dropdown dropdown-quick-sidebar-toggler">
            <a href="javascript:;" className="dropdown-toggle">
              <i className="icon-logout" />
            </a>
          </li>
          {/* END QUICK SIDEBAR TOGGLER */}
        </ul>
      </div>
    )
  }
})

export default TopMenu;
