const taskList = []

console.log(taskList)

function addTask (taskName) {
    const tusk = {name: taskName, completed: false}
    if (taskName) {
        taskList.push(task)
    } else {
        console.log("Название задачи не может быть пустым!")
}
}

addTask("Покушать")

import * as Sentry from '@sentry/browser';

import { Integrations } from '@sentry/tracing';

Sentry.init({

  dsn: 'YOUR_SENTRY_DSN',

  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,

});