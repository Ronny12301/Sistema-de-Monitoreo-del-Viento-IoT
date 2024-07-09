# Sistema de Monitoreo del Viento - IoT

Aplicación web para la visualización de los datos capturados por distintos anemómetros

## Diagrama de despliegue
Conecta tus anemómetros a un ordenador o Raspberry Pi y con la ayuda de Node-RED, comparte la información al servidor

![Diagrama tesis - Despliegue](https://github.com/Ronny12301/Anemometer-data-display/assets/100802754/979ec91a-ad56-4e95-84e4-7bec855db383)

## Node-RED
Este flujo de nodos, lee los mensajes del anemómetro enviados al puerto serial, los cuales son procesados y enviados por MQTT al servidor

![image](https://github.com/Ronny12301/Anemometer-data-display/assets/100802754/c1ad8750-09b9-49e7-8dc5-f84c975507b6)


## Funcionalidades del Sistema

- **Visualización en Tiempo Real:** La plataforma permite la visualización de los datos del viento en tiempo real.
- **Base de Datos:** Los registros del viento se almacenan en una base de datos MySQL, clasificados por fecha y accesibles mediante un calendario.
- **Generación de Gráficas:** De forma automática, el sistema genera gráficas con los valores capturados, permitiendo un seguimiento detallado del comportamiento del viento.

## Tecnologías Utilizadas

- **Backend:** Node.js, Express
- **Frontend:** Tailwind CSS
- **Comunicación:** MQTT.js
- **Base de Datos:** Prisma, MySQL

## Uso

- Accede a la plataforma mediante el navegador para visualizar los datos en tiempo real.
- Consulta el calendario para ver registros históricos.
- Analiza las gráficas generadas automáticamente para seguir el comportamiento del viento.

## Interfaz de usuario
### Captura de datos en tiempo real
![image](https://github.com/Ronny12301/Anemometer-data-display/assets/100802754/ff553de1-6666-4a02-925d-466d2f41ca95)

### Datos por día
![image](https://github.com/Ronny12301/Anemometer-data-display/assets/100802754/0ed06ff2-bd69-4105-ab04-6a54d4705bf6)


---

# Wind Monitoring System - IoT

Web application for visualizing data captured by different anemometers

## Deployment Diagram
Connect your anemometers to a computer or Raspberry Pi and, with the help of Node-RED, share the information to the server.

![Thesis Diagram - Deployment](https://github.com/Ronny12301/Sistema-de-Monitoreo-del-Viento-IoT/assets/100802754/78ca8f37-c485-491d-a63f-6ef7fe2cdc7e)

## Node-RED
This node flow reads the messages from the anemometer sent to the serial port, which are processed and sent via MQTT to the server.

![Node-RED flow](https://github.com/Ronny12301/Anemometer-data-display/assets/100802754/c1ad8750-09b9-49e7-8dc5-f84c975507b6)

## System Features

- **Real-Time Visualization:** The platform allows real-time visualization of wind data.
- **Database:** Wind records are stored in a MySQL database, classified by date, and accessible via a calendar.
- **Graph Generation:** The system automatically generates graphs with the captured values, allowing detailed tracking of wind behavior.

## Technologies Used

- **Backend:** Node.js, Express
- **Frontend:** Tailwind CSS
- **Communication:** MQTT.js
- **Database:** Prisma, MySQL

## Usage

- Access the platform via a browser to view real-time data.
- Check the calendar to see historical records.
- Analyze the automatically generated graphs to track wind behavior.

## User Interface
### Real-Time Data Capture
![image](https://github.com/Ronny12301/Anemometer-data-display/assets/100802754/ff553de1-6666-4a02-925d-466d2f41ca95)

### Data by Day
![image](https://github.com/Ronny12301/Anemometer-data-display/assets/100802754/0ed06ff2-bd69-4105-ab04-6a54d4705bf6)
