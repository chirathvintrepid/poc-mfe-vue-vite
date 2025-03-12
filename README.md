# Vue + Vite Module Federation

This project demonstrates module federation using the `vite-module-federation-plugin` with Vue and Vite. It consists of two microfrontend applications:

1. **Host App** - The main application that consumes a shared component from the remote app.
2. **Remote App** - A microfrontend that exposes a shared component for the host application.

## Technologies Used

- **Vue.js**
- **Vite**
- **Vite Module Federation Plugin**

## Setup Instructions

To run the project, follow these steps:

### Install Dependencies

```sh
cd host-app
npm install

cd ../remote-app
npm install
```

### Build and Serve Remote Application

Since the remote app provides shared modules, Vite requires tha application to be built first:

```sh
cd remote
npm run build
```

Then, serve the remote app so it can be accessed by the host application:

```sh
npm run serve
```

### Run Host Application

Once the remote app is running, launch the host application:

```sh
..cd/host-app
npm run dev
```

The host app will dynamically load components from the remote app via module federation.

## Related JIRA task

https://peakadventuretravel.atlassian.net/browse/LA-73
