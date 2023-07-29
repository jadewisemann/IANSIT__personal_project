# 아두이노 기반 온도 모니터링 프로젝트

이 프로젝트는 아두이노로 측정된 온도 데이터를 JSON 형식으로 패킹하고, ESP32를 사용하여 아두이노 웹 서버를 구축한 뒤, 클라이언트를 리액트로 개발하여 Vercel을 통해 배포하는 과정을 다룹니다.

## Introduction

This project involves packing temperature data measured by Arduino in JSON format, building an Arduino web server using ESP32, developing a client using React, and deploying it through Vercel.

# 기술 스펙

- 아두이노 (Arduino): 오픈소스 플랫폼으로 개발된 하드웨어와 소프트웨어를 사용하여 다양한 전자장치를 구축할 수 있습니다.
- ESP32: 아두이노와 호환되는 강력한 마이크로컨트롤러로, Wi-Fi 및 Bluetooth 기능을 갖추고 있어 웹 서버를 설립하는데 사용하였습니다.
- JSON: 아두이노에서 수집된 온도 데이터를 나타내기 위해 사용되는 가벼운 데이터 교환 형식입니다.
- 리액트 (React): 사용자 인터페이스를 구축하는데 사용되는 강력한 자바스크립트 라이브러리입니다.
- Vercel: 리액트를 사용해 개발된 클라이언트를 효율적으로 배포하는데 도움을 주는 서비스 플랫폼입니다.

## Technical Specifications

- Arduino: An open-source platform that enables building various electronic devices using both hardware and software.
- ESP32: A powerful microcontroller compatible with Arduino, equipped with Wi-Fi and Bluetooth capabilities, used to establish a web server.
- JSON: A lightweight data interchange format used to represent temperature data collected from the Arduino.
- React: A powerful JavaScript library used for building user interfaces.
- Vercel: A service platform that helps to efficiently deploy clients developed using React.
