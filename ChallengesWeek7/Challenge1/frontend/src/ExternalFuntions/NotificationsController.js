import React from 'react';

//External components used
import NotificationAlert from 'react-notification-alert';
import "react-notification-alert/dist/animate.css";

export function notifyInfo(message){
    this.refs.notificationAlert.notificationAlert({
      place: 'br',
      message: (
            <div className="notification-container">
                {message}
            </div>
        ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 2,
      closeButton: false
    });
}

/**
 * NOt ready for exporting since there are no modifiable clases yext
 * @param {*} message 
 */
export function notifyDanger (message) {
    this.refs.notificationAlert.notificationAlert({
        place: 'br',
        message: (
              <div className="notification-container">
                  {message}
              </div>
          ),
        type: 'danger',
        icon: "now-ui-icons ui-1_bell-53",
        autoDismiss: 2,
        closeButton: false
      });
}

/**
 * Not ready to implement (needs a general component for it)
 * @param {*} message 
 */
export function notifySuccess (message) {
    this.refs.notificationAlert.notificationAlert({
        place: 'br',
        message: (
              <div className="notification-container">
                  {message}
              </div>
          ),
        type: 'danger',
        icon: "now-ui-icons ui-1_bell-53",
        autoDismiss: 2,
        closeButton: false
      });
}

