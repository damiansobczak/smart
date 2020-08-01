import React, { useEffect, useState } from "react";
import "./Temperature.scss";
import axios from "axios";
import { useArc } from "../../hooks/useArc";

export default function Temperature() {
    const [temperature, setTemperature] = useState(0);
    const [arc, setArc] = useArc(130, 130, 125, -10, 0, ".temperature__indicator #arc1", temperature);

    const changeTemperature = (action) => {
        switch (String(action).toUpperCase()) {
            case "INCREASE":
                if (temperature < 28) {
                    setTemperature(temperature + 1);
                    setArc(130, 130, 125, -10, 0, temperature);
                }
                break;
            case "DECREASE":
                if (temperature > 16) {
                    setTemperature(temperature - 1);
                    setArc(130, 130, 125, -10, 0, temperature);
                }
                break;
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3002/temperature')
            .then(res => {
                const tmp = res.data;
                setTemperature(Number(tmp[tmp.length - 1].temperature));
            });
    }, []);

    useEffect(() => {
        setArc(130, 130, 125, -10, 0, temperature + 1);
    }, [temperature]);

    return (
        <div className="temperature temperature--changing grid__col grid__col--sm-5">
            <div className="temperature__header">
                <h4>Temperature</h4>
                <div className="temperature__speech">
                    Use speech
                    <span className="icon-microphone"></span>
                </div>
            </div>
            <div className="temperature__chart">
                <div className="temperature__scale">
                    {/* Lines */}
                    <svg width="261" height="153" viewBox="0 0 261 153" fill="none" xmlns="http://www.w3.org/2000/svg" className="temperature__lines">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.84214 152.474L13.6733 150.468C13.6236 150.175 13.575 149.881 13.5274 149.588L1.68148 151.504C1.73385 151.828 1.7874 152.151 1.84214 152.474ZM0.480242 141.774L12.4365 140.751C12.4113 140.456 12.3871 140.16 12.364 139.864L0.400347 140.798C0.425783 141.124 0.452417 141.449 0.480242 141.774ZM0.000911636 130.993L12.0008 130.949C12.0003 130.799 12 130.65 12 130.5C12 130.35 12.0003 130.201 12.0008 130.051L0.000911777 130.007C0.000304103 130.171 0 130.336 0 130.5C0 130.664 0.000304056 130.829 0.000911636 130.993ZM0.400349 120.202L12.364 121.136C12.3871 120.84 12.4113 120.544 12.4365 120.249L0.480245 119.226C0.452419 119.551 0.425786 119.876 0.400349 120.202ZM1.68149 109.496L13.5274 111.412C13.575 111.119 13.6236 110.825 13.6733 110.532L1.84214 108.526C1.7874 108.849 1.73385 109.172 1.68149 109.496ZM3.84497 98.9281L15.4909 101.822C15.5623 101.534 15.6347 101.248 15.7082 100.961L4.08442 97.9797C4.00345 98.2954 3.92363 98.6115 3.84497 98.9281ZM6.88022 88.5755L18.2449 92.4285C18.3401 92.1475 18.4364 91.867 18.5337 91.587L7.19854 87.6481C7.09131 87.9567 6.9852 88.2659 6.88022 88.5755ZM10.7653 78.5145L21.7701 83.2991C21.8886 83.0266 22.008 82.7547 22.1285 82.4834L11.1601 77.6156C11.0274 77.9146 10.8958 78.2143 10.7653 78.5145ZM15.4729 68.8099L26.0431 74.4907C26.1836 74.2293 26.3251 73.9684 26.4675 73.7081L15.9404 67.9479C15.7835 68.2346 15.6277 68.5219 15.4729 68.8099ZM20.9688 59.5268L31.0333 66.0618C31.195 65.8128 31.3576 65.5644 31.5211 65.3167L21.5059 58.7065C21.3259 58.9792 21.1468 59.2527 20.9688 59.5268ZM27.211 50.7299L36.7031 58.0715C36.8849 57.8365 37.0675 57.6022 37.251 57.3686L27.814 49.9562C27.6121 50.2133 27.411 50.4712 27.211 50.7299ZM34.1555 42.4762L43.0124 50.5727C43.2129 50.3534 43.4142 50.1349 43.6163 49.9171L34.8201 41.7546C34.5976 41.9943 34.3761 42.2348 34.1555 42.4762ZM41.7546 34.8201L49.9171 43.6163C50.1349 43.4142 50.3534 43.2129 50.5727 43.0124L42.4762 34.1555C42.2348 34.3761 41.9943 34.5977 41.7546 34.8201ZM49.9562 27.8141L57.3686 37.251C57.6022 37.0675 57.8365 36.8849 58.0715 36.7032L50.7299 27.211C50.4712 27.4111 50.2133 27.6121 49.9562 27.8141ZM58.7065 21.5059L65.3167 31.5211C65.5644 31.3576 65.8128 31.195 66.0618 31.0334L59.5268 20.9688C59.2527 21.1468 58.9792 21.3259 58.7065 21.5059ZM67.9479 15.9404L73.7081 26.4675C73.9684 26.3251 74.2293 26.1836 74.4907 26.0431L68.8099 15.4729C68.5219 15.6277 68.2346 15.7835 67.9479 15.9404ZM77.6156 11.1601L82.4834 22.1285C82.7547 22.008 83.0266 21.8886 83.2991 21.7701L78.5145 10.7653C78.2143 10.8958 77.9146 11.0274 77.6156 11.1601ZM87.6481 7.19854L91.587 18.5337C91.867 18.4364 92.1475 18.3401 92.4285 18.2448L88.5755 6.88022C88.2659 6.9852 87.9567 7.09131 87.6481 7.19854ZM97.9797 4.08442L100.961 15.7082C101.248 15.6347 101.534 15.5623 101.822 15.4909L98.9282 3.84496C98.6115 3.92362 98.2954 4.00344 97.9797 4.08442ZM108.526 1.84214L110.532 13.6733C110.825 13.6236 111.119 13.575 111.412 13.5274L109.496 1.68148C109.172 1.73385 108.849 1.7874 108.526 1.84214ZM119.226 0.480243L120.249 12.4365C120.544 12.4113 120.84 12.3871 121.136 12.364L120.202 0.400347C119.876 0.425784 119.551 0.452417 119.226 0.480243ZM130.007 0.000911636C130.171 0.000304056 130.336 0 130.5 0C130.664 0 130.829 0.000304103 130.993 0.000911777L130.949 18.0008C130.799 18.0003 130.65 18 130.5 18C130.35 18 130.201 18.0003 130.051 18.0008L130.007 0.000911636ZM140.798 0.400349L139.864 12.364C140.16 12.3871 140.456 12.4113 140.751 12.4365L141.774 0.480245C141.449 0.452419 141.124 0.425786 140.798 0.400349ZM151.504 1.68149L149.588 13.5274C149.882 13.575 150.175 13.6236 150.468 13.6733L152.474 1.84214C152.151 1.7874 151.828 1.73385 151.504 1.68149ZM162.072 3.84497L159.178 15.4909C159.466 15.5623 159.752 15.6347 160.039 15.7082L163.02 4.08442C162.705 4.00345 162.388 3.92363 162.072 3.84497ZM172.424 6.88023L168.572 18.2449C168.852 18.3401 169.133 18.4364 169.413 18.5337L173.352 7.19854C173.043 7.09131 172.734 6.9852 172.424 6.88023ZM182.486 10.7653L177.701 21.7701C177.973 21.8886 178.245 22.008 178.517 22.1285L183.384 11.1601C183.085 11.0274 182.786 10.8958 182.486 10.7653ZM192.19 15.4729L186.509 26.0431C186.771 26.1836 187.032 26.3251 187.292 26.4675L193.052 15.9404C192.765 15.7835 192.478 15.6277 192.19 15.4729ZM201.473 20.9688L194.938 31.0333C195.187 31.195 195.436 31.3576 195.683 31.5211L202.294 21.5059C202.021 21.3259 201.747 21.1468 201.473 20.9688ZM210.27 27.211L202.929 36.7031C203.164 36.8849 203.398 37.0675 203.631 37.251L211.044 27.814C210.787 27.6121 210.529 27.411 210.27 27.211ZM218.524 34.1555L210.427 43.0124C210.647 43.2129 210.865 43.4142 211.083 43.6163L219.245 34.8201C219.006 34.5976 218.765 34.3761 218.524 34.1555ZM226.18 41.7546L217.384 49.9171C217.586 50.1349 217.787 50.3534 217.988 50.5727L226.845 42.4762C226.624 42.2348 226.402 41.9943 226.18 41.7546ZM233.186 49.9562L223.749 57.3686C223.932 57.6022 224.115 57.8365 224.297 58.0715L233.789 50.7299C233.589 50.4712 233.388 50.2133 233.186 49.9562ZM239.494 58.7065L229.479 65.3167C229.642 65.5644 229.805 65.8128 229.967 66.0618L240.031 59.5268C239.853 59.2527 239.674 58.9792 239.494 58.7065ZM245.06 67.9479L234.532 73.7081C234.675 73.9684 234.816 74.2293 234.957 74.4907L245.527 68.8099C245.372 68.5219 245.216 68.2346 245.06 67.9479ZM249.84 77.6156L238.872 82.4834C238.992 82.7547 239.111 83.0266 239.23 83.2991L250.235 78.5145C250.104 78.2143 249.973 77.9146 249.84 77.6156ZM253.801 87.6481L242.466 91.587C242.564 91.867 242.66 92.1475 242.755 92.4285L254.12 88.5755C254.015 88.2659 253.909 87.9567 253.801 87.6481ZM256.916 97.9797L245.292 100.961C245.365 101.248 245.438 101.534 245.509 101.822L257.155 98.9282C257.076 98.6115 256.997 98.2954 256.916 97.9797ZM259.158 108.526L247.327 110.532C247.376 110.825 247.425 111.119 247.473 111.412L259.319 109.496C259.266 109.172 259.213 108.849 259.158 108.526ZM260.52 119.226L248.563 120.249C248.589 120.544 248.613 120.84 248.636 121.136L260.6 120.202C260.574 119.876 260.548 119.551 260.52 119.226ZM260.999 130.007L248.999 130.051C248.999 130.14 249 130.229 249 130.317C249 130.378 249 130.439 249 130.5C249 130.65 249 130.799 248.999 130.949L260.999 130.993C261 130.829 261 130.664 261 130.5C261 130.336 261 130.171 260.999 130.007ZM260.6 140.798L248.636 139.864C248.613 140.16 248.589 140.456 248.563 140.751L260.52 141.774C260.548 141.449 260.574 141.124 260.6 140.798ZM259.319 151.504L247.473 149.588C247.425 149.882 247.376 150.175 247.327 150.468L259.158 152.474C259.213 152.151 259.266 151.828 259.319 151.504Z" fill="#C7CCD1" />
                    </svg>

                    {/* Indicator */}
                    <svg width="260" height="260" viewBox="0 0 260.8 260.8" className="temperature__indicator">
                        <linearGradient id='grad' gradientTransform={`rotate(${temperature < 22 ? '0' : '80'})`}>
                            <stop stopColor='rgba(0, 0, 0, 0)' />
                            <stop offset='0' stopColor='rgba(240, 88, 46, 0)' />
                            <stop offset={`${temperature < 22 ? '80%' : '50%'}`} stopColor='rgba(240, 88, 46, 0.1)' />
                            <stop offset='100%' stopColor='rgba(240, 88, 46, 0.3)' />
                        </linearGradient>

                        <path id="arc1" fill="transparent" stroke="url(#grad)" strokeWidth="12" d={arc} />
                    </svg>
                    <svg width="340" height="310" viewBox="0 0 340 310" className="temperature__stages">
                        <text x="0" y="180">16℃</text>
                        <text x="30" y="70">19℃</text>
                        <text x="155" y="15">22℃</text>
                        <text x="280" y="70">25℃</text>
                        <text x="310" y="180">28℃</text>
                    </svg>
                </div>

                {/* Circle */}
                <div className="temperature__circle">
                    <div className="temperature__inner-circle">
                        <div className="temperature__info">Normal</div>
                        <div className="temperature__value">{temperature + "℃"}</div>
                    </div>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="temperature__loader">
                        <path d="M125.302 24.6984C126.81 23.1899 126.817 20.7359 125.232 19.3071C118.89 13.5865 111.61 8.98482 103.701 5.70903C94.6018 1.93993 84.8491 0 75 0C65.1508 0 55.3982 1.93993 46.2987 5.70903C38.3903 8.98482 31.1099 13.5865 24.7675 19.3071C23.1833 20.736 23.1899 23.1899 24.6983 24.6983C26.2068 26.2068 28.6454 26.1976 30.238 24.7782C35.8571 19.7699 42.2841 15.7339 49.2551 12.8464C57.4173 9.46555 66.1654 7.72545 75 7.72545C83.8346 7.72545 92.5827 9.46556 100.745 12.8464C107.716 15.7339 114.143 19.7699 119.762 24.7782C121.355 26.1976 123.793 26.2068 125.302 24.6984Z" fill="url(#paint0_angular)"></path>
                        <defs><radialGradient id="paint0_angular" cx="1" cy="3" r="30" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 45) rotate(-132.979) scale(10.0467)"><stop offset="0.000268106" stopColor="#ffffff" stopOpacity="0"></stop><stop offset="0.10351" stopColor="#4252B1" stopOpacity="0.1"></stop><stop offset="0.255208" stopColor="#3546AB"></stop></radialGradient></defs>
                    </svg>
                </div>
                <button className="temperature__btn" onClick={() => changeTemperature("DECREASE")}>-</button>
                <button className="temperature__btn temperature__btn--right" onClick={() => changeTemperature("INCREASE")}>+</button>
            </div>
        </div>
    );
}
