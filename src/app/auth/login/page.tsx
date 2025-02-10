"use client";

import React from "react";
import FormWrapper from "@/components/Forms/FormWrapper";
import Input from "@/components/Forms/Input";
import z from "@/lib/validation";
import { useActionState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function login(prevState: unknown, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const submittedData = Object.fromEntries(formData.entries());

    const a = {
        status: "success",
        data: {
            message: "Datos guardados correctamente",
        },
        fieldData: submittedData,
    };

    if (a.status === "success") {
        redirect("/");
    }
}

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
});

export default function Page() {
    const [lastResult, action, isPending] = useActionState(login, undefined);

    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen w-screen">
            <svg
                width="126"
                height="51"
                viewBox="0 0 126 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-12"
            >
                <g clipPath="url(#clip0_1949_34681)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.7749 45.1099L24.0108 35.1558C23.249 33.8407 23.249 32.3367 24.0108 31.0216C24.7727 29.7065 26.0808 28.9545 27.6008 28.9545H39.1289L29.7749 45.1062V45.1099Z"
                        fill="#E8547E"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0669 45.1099L16.831 35.1558C17.5928 33.8407 17.5928 32.3367 16.831 31.0216C16.0691 29.7065 14.761 28.9545 13.241 28.9545H1.71289L11.0669 45.1062V45.1099Z"
                        fill="#FFCE00"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0684 12.8064L16.8324 22.7568C17.5943 24.0719 18.9024 24.8239 20.4224 24.8239C21.9424 24.8239 23.2505 24.0719 24.0124 22.7568L29.7764 12.8064H11.0684Z"
                        fill="#172BDE"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.7762 45.1099L25.0974 37.034L24.0122 35.1595C23.2503 33.8444 21.9422 33.0924 20.4222 33.0924C18.9022 33.0924 17.5941 33.8444 16.8322 35.1595L15.7433 37.034L11.0645 45.1099C13.0415 48.5366 16.4531 50.5 20.4185 50.5C24.3838 50.5 27.7954 48.5366 29.7725 45.1099"
                        fill="#FF761A"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0688 12.8064L15.7477 20.8823L16.8328 22.7605C17.5947 24.0756 17.5947 25.5796 16.8328 26.8947C16.071 28.2098 14.7628 28.9618 13.2429 28.9618H1.71477C-0.273474 25.5426 -0.273474 21.6121 1.70733 18.1891C3.68814 14.7661 7.10346 12.8027 11.0688 12.8101"
                        fill="#6CD331"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.7749 12.8064L25.0997 20.8823L24.0108 22.7568C23.249 24.0719 23.249 25.5759 24.0108 26.891C24.7727 28.2061 26.0808 28.9582 27.6008 28.9582H39.1289C41.1171 25.5389 41.1171 21.6084 39.1363 18.1854C37.1555 14.7624 33.7402 12.799 29.7749 12.8064Z"
                        fill="#A74DCE"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5374 10.8344C15.5374 8.14494 17.7226 5.96668 20.4206 5.96668C23.1187 5.96668 25.3039 8.14494 25.3039 10.8344H29.7784C29.7784 5.68513 25.59 1.51013 20.4243 1.51013C15.2586 1.51013 11.0703 5.68513 11.0703 10.8344H15.5448H15.5374Z"
                        fill="#172BDE"
                    />
                </g>
                <path
                    d="M93.1026 46.852C92.2858 46.852 91.5553 46.633 90.911 46.195C90.2782 45.757 89.7835 45.1592 89.4269 44.4016C89.0702 43.6439 88.8977 42.8094 88.9092 41.8979C88.9092 40.9864 89.099 40.1518 89.4787 39.3942C89.8698 38.6247 90.399 38.0151 91.0663 37.5653C91.7336 37.1154 92.4699 36.8905 93.2752 36.8905C94.0806 36.8905 94.8053 37.1095 95.4496 37.5475C96.1054 37.9855 96.6173 38.5892 96.9855 39.3587C97.3537 40.1163 97.5377 40.9627 97.5377 41.8979C97.5377 42.8094 97.3364 43.6439 96.9337 44.4016C96.5426 45.1592 96.0076 45.757 95.3288 46.195C94.65 46.633 93.908 46.852 93.1026 46.852ZM87.7012 37.2279H89.6857V50.4743H87.7184L87.7012 37.2279ZM92.5332 45.2006C93.0854 45.2006 93.5916 45.0585 94.0518 44.7744C94.5235 44.4785 94.8974 44.076 95.1735 43.567C95.4611 43.058 95.6049 42.4898 95.6049 41.8624C95.6049 41.2231 95.4784 40.6549 95.2253 40.1577C94.9837 39.6605 94.6443 39.2699 94.2071 38.9858C93.7814 38.7017 93.2982 38.5596 92.7575 38.5596C92.2168 38.5596 91.7106 38.7076 91.2389 39.0035C90.7672 39.2876 90.3875 39.6842 90.0999 40.1932C89.8238 40.6904 89.6857 41.2468 89.6857 41.8624C89.6857 42.4898 89.8065 43.058 90.0481 43.567C90.3012 44.076 90.6464 44.4785 91.0836 44.7744C91.5207 45.0585 92.0039 45.2006 92.5332 45.2006Z"
                    fill="black"
                />
                <path
                    d="M80.6932 47.1955C79.7166 47.1955 78.8378 46.9689 78.0566 46.5158C77.2754 46.0505 76.6608 45.4259 76.2127 44.6422C75.7647 43.8462 75.5349 42.9767 75.5234 42.0338C75.5349 41.0786 75.7647 40.2092 76.2127 39.4254C76.6608 38.6417 77.2754 38.0233 78.0566 37.5702C78.8378 37.1171 79.7109 36.8905 80.6759 36.8905C81.6869 36.8905 82.5772 37.1171 83.3469 37.5702C84.1281 38.0233 84.737 38.6417 85.1736 39.4254C85.6101 40.2092 85.8284 41.0786 85.8284 42.0338C85.8284 42.9767 85.6044 43.8462 85.1563 44.6422C84.7083 45.4259 84.0879 46.0505 83.2952 46.5158C82.514 46.9689 81.6467 47.1955 80.6932 47.1955ZM80.607 45.3769C81.2159 45.3769 81.7616 45.23 82.2441 44.9361C82.7381 44.6299 83.1287 44.2258 83.4159 43.7237C83.7031 43.2094 83.8467 42.6461 83.8467 42.0338C83.8582 41.397 83.7318 40.8276 83.4676 40.3255C83.2148 39.8112 82.8529 39.4132 82.3819 39.1315C81.9109 38.8376 81.3652 38.6907 80.7448 38.6907C80.136 38.6907 79.5845 38.8376 79.0905 39.1315C78.5965 39.4254 78.2059 39.8295 77.9187 40.3439C77.643 40.8459 77.4937 41.4093 77.4707 42.0338C77.4592 42.6461 77.5856 43.2094 77.8498 43.7237C78.114 44.2381 78.4874 44.6422 78.9699 44.9361C79.4524 45.23 79.9981 45.3769 80.607 45.3769Z"
                    fill="black"
                />
                <path
                    d="M72.5632 40.9184C72.5632 40.2628 72.3888 39.7373 72.0399 39.3417C71.691 38.9348 71.1967 38.7314 70.557 38.7314C69.9523 38.7314 69.3998 38.8783 68.8997 39.1722C68.3996 39.4547 67.9984 39.8673 67.696 40.4098C67.4052 40.9523 67.254 41.5852 67.2424 42.3085L66.4574 42.0373C66.4806 41.054 66.7074 40.1894 67.1377 39.4434C67.5681 38.6862 68.1321 38.1041 68.8299 37.6973C69.5277 37.2791 70.2779 37.07 71.0804 37.07C72.2085 37.07 73.075 37.4091 73.6797 38.0872C74.2845 38.7653 74.5869 39.7655 74.5869 41.0879V46.2586H72.5632V40.9184ZM65.2188 33.6116H67.2424V46.2586H65.2188V33.6116Z"
                    fill="black"
                />
                <path
                    d="M58.5904 47.1955C57.5576 47.1955 56.6641 47.0363 55.9098 46.7179C55.1556 46.3872 54.5754 45.9525 54.1692 45.4137C53.7631 44.8626 53.5426 44.2687 53.5078 43.6319H55.4747C55.5675 44.1585 55.8576 44.6054 56.345 44.9728C56.844 45.328 57.5634 45.5055 58.5033 45.5055C59.1299 45.5178 59.6463 45.4504 60.0525 45.3035C60.4702 45.1443 60.7777 44.9483 60.975 44.7157C61.1722 44.483 61.2651 44.2381 61.2535 43.9809C61.2303 43.736 61.1432 43.5401 60.9924 43.3931C60.8415 43.2339 60.5688 43.1114 60.1743 43.0257C59.7798 42.9278 59.2054 42.8482 58.4511 42.7869C57.0238 42.6767 55.9505 42.3644 55.231 41.8501C54.5232 41.3235 54.1634 40.6378 54.1518 39.7928C54.1518 39.2662 54.3201 38.7825 54.6566 38.3416C54.9931 37.9008 55.4863 37.5518 56.1361 37.2946C56.7859 37.0252 57.5634 36.8905 58.4685 36.8905C59.3736 36.8905 60.1627 37.0313 60.8357 37.313C61.5088 37.5946 62.0425 37.9865 62.4371 38.4886C62.8316 38.9907 63.0869 39.5724 63.2029 40.2336H61.149C61.0446 39.7193 60.7661 39.3152 60.3136 39.0213C59.861 38.7274 59.2402 38.5804 58.4511 38.5804C57.9289 38.5804 57.4996 38.6478 57.1631 38.7825C56.8266 38.905 56.5829 39.0703 56.432 39.2785C56.2812 39.4744 56.2115 39.6826 56.2231 39.903C56.2696 40.2826 56.4668 40.5765 56.8149 40.7847C57.1747 40.9806 57.7491 41.1031 58.5381 41.1521C59.7334 41.2256 60.6733 41.3848 61.3579 41.6297C62.0541 41.8624 62.5531 42.1746 62.8548 42.5665C63.1565 42.9461 63.319 43.4176 63.3422 43.9809C63.3654 44.5197 63.2029 45.0341 62.8548 45.5239C62.5183 46.0137 61.9903 46.4178 61.2709 46.7362C60.5514 47.0424 59.6579 47.1955 58.5904 47.1955Z"
                    fill="black"
                />
                <path
                    d="M118.609 28.0563C117.279 28.0563 116.089 27.7096 115.04 27.0164C113.991 26.3232 113.176 25.377 112.595 24.1779C112.014 22.9787 111.724 21.6485 111.724 20.187C111.742 18.7443 112.07 17.4234 112.707 16.2243C113.344 15.0252 114.206 14.0696 115.293 13.3576C116.398 12.6457 117.616 12.2897 118.947 12.2897C120.258 12.2897 121.439 12.6363 122.488 13.3295C123.537 14.0228 124.361 14.969 124.961 16.1681C125.579 17.3672 125.888 18.7069 125.888 20.187C125.888 21.6297 125.56 22.96 124.905 24.1779C124.249 25.377 123.359 26.3232 122.235 27.0164C121.129 27.7096 119.921 28.0563 118.609 28.0563ZM108.941 12.8237H113.101L113.129 33.7896H108.97L108.941 12.8237ZM117.373 24.9929C118.197 24.9929 118.956 24.7868 119.649 24.3746C120.342 23.9624 120.895 23.3909 121.307 22.6602C121.72 21.9108 121.926 21.077 121.926 20.1589C121.926 19.2408 121.738 18.4258 121.364 17.7138C121.008 16.9831 120.502 16.4117 119.846 15.9995C119.209 15.5873 118.497 15.3812 117.71 15.3812C116.904 15.3812 116.146 15.5873 115.434 15.9995C114.74 16.4117 114.178 16.9925 113.747 17.7419C113.316 18.4727 113.101 19.2783 113.101 20.1589C113.101 21.077 113.288 21.9108 113.663 22.6602C114.038 23.3909 114.544 23.9624 115.181 24.3746C115.836 24.7868 116.567 24.9929 117.373 24.9929Z"
                    fill="black"
                />
                <path
                    d="M95.4831 20.8896C95.5393 19.091 95.8765 17.5452 96.4948 16.2524C97.1131 14.9596 97.9001 13.9759 98.8556 13.3014C99.8299 12.6269 100.87 12.2897 101.975 12.2897C103.024 12.2897 103.943 12.5614 104.729 13.1047C105.516 13.6293 106.116 14.3975 106.528 15.4093C106.94 16.421 107.137 17.6295 107.118 19.0347H102.959C102.978 17.9855 102.772 17.1517 102.341 16.5334C101.928 15.9151 101.319 15.606 100.514 15.606C99.8393 15.606 99.221 15.8215 98.6589 16.2524C98.1155 16.6646 97.6752 17.2735 97.338 18.0792C97.0195 18.8661 96.8508 19.8029 96.8321 20.8896H95.4831ZM92.6445 12.8237H96.8321V27.5223H92.6445V12.8237Z"
                    fill="black"
                />
                <path
                    d="M81.9572 28.0563C80.2522 28.0563 78.7533 27.719 77.4605 27.0445C76.1677 26.37 75.1653 25.4332 74.4533 24.2341C73.7601 23.0349 73.4322 21.6766 73.4697 20.1589C73.4884 18.735 73.8631 17.4234 74.5939 16.2243C75.3246 15.0252 76.3363 14.0696 77.6291 13.3576C78.9219 12.6457 80.374 12.2897 81.9853 12.2897C83.7465 12.2897 85.2548 12.6644 86.5101 13.4139C87.7655 14.1446 88.7117 15.1189 89.3487 16.3367C89.9857 17.5358 90.2949 18.8193 90.2761 20.187C90.2387 20.8241 90.1825 21.2456 90.1075 21.4517H77.5448C77.6198 22.4822 78.0694 23.2972 78.8938 23.8968C79.737 24.4964 80.8049 24.7962 82.0977 24.7962C82.9783 24.7962 83.784 24.6275 84.5147 24.2903C85.2454 23.953 85.8356 23.5315 86.2853 23.0256L89.3206 24.8524C88.5524 25.8079 87.5125 26.5855 86.201 27.185C84.8895 27.7659 83.4749 28.0563 81.9572 28.0563ZM86.2291 18.9504C86.2104 18.3509 86.0324 17.7888 85.6951 17.2642C85.3579 16.7395 84.8801 16.318 84.2618 15.9995C83.6622 15.6622 82.9502 15.4936 82.1258 15.4936C80.9829 15.4936 80.0086 15.8121 79.203 16.4491C78.3973 17.0674 77.8633 17.9012 77.601 18.9504H86.2291Z"
                    fill="black"
                />
                <path
                    d="M57.6103 14.2289V27.5223H53.5352V7.98975H57.6103L67.0815 21.5642V7.98975H71.1004V27.5223H66.8848L57.6103 14.2289Z"
                    fill="black"
                />
                <defs>
                    <clipPath id="clip0_1949_34681">
                        <rect
                            width="40.404"
                            height="50"
                            fill="white"
                            transform="translate(0.109375 0.5)"
                        />
                    </clipPath>
                </defs>
            </svg>
            <svg
                width="249"
                height="359"
                viewBox="0 0 249 359"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0"
            >
                <path
                    d="M-5.58202 100.897L-5.58203 -78L45.5808 -78L45.5808 100.897L-5.58202 100.897Z"
                    fill="#FF6F00"
                />
                <path
                    d="M45.5762 -78L45.5762 101.52C45.5762 129.485 68.2965 152.187 96.2843 152.187L96.2843 -78L45.5762 -78Z"
                    fill="#FF4081"
                />
                <path
                    d="M96.2793 101.107L96.2793 -78L147.892 -78L147.892 101.107L96.2793 101.107Z"
                    fill="#6CD331"
                />
                <path
                    d="M121.57 -78L121.57 -1.1401C121.57 13.0874 133.132 24.6398 147.371 24.6398L147.964 24.6398L147.964 -52.2201C147.964 -66.4475 136.402 -78 122.163 -78L121.57 -78Z"
                    fill="white"
                />
                <path
                    d="M198.691 229.108L198.691 75.6381C198.691 61.62 187.303 50.2411 173.273 50.2411C159.269 50.2411 147.896 61.6047 147.896 75.5973L147.896 229.108L198.691 229.108Z"
                    fill="#FF4081"
                />
                <path
                    d="M198.865 229.108L198.865 304.768L147.917 304.768L147.917 229.108L198.865 229.108Z"
                    fill="white"
                />
                <path
                    d="M198.697 229.108L198.697 290.266C198.697 298.117 192.332 304.482 184.481 304.482C176.63 304.482 170.265 298.117 170.265 290.266L170.265 229.108L198.697 229.108Z"
                    fill="#FFD500"
                />
                <path
                    d="M147.922 304.768L147.922 101.096L147.457 101.096C119.219 101.096 96.289 124.007 96.289 152.222L96.289 304.768L147.922 304.768Z"
                    fill="#FF6F00"
                />
                <path
                    d="M96.2891 304.87L96.2891 152.192C68.3012 152.192 45.5809 174.893 45.5809 202.858L45.5809 304.87L96.2891 304.87Z"
                    fill="#FFD500"
                />
                <path
                    d="M45.5762 100.897L45.5762 304.87L-5.5867 304.87L-5.58671 100.897L45.5762 100.897Z"
                    fill="#6CD331"
                />
                <path
                    d="M96.4518 -1.20281L45.4043 49.8027L-5.4698 -1.02954L45.5777 -52.0351L96.4518 -1.20281Z"
                    fill="white"
                />
                <path
                    d="M70.9785 -26.4811L70.9785 24.2568L20.1988 24.2568L20.1988 -26.4811L70.9785 -26.4811Z"
                    fill="#172BDE"
                />
                <path
                    d="M45.4044 16.8267L27.4492 -1.11365L45.4044 -19.054L63.3595 -1.11365L45.4044 16.8267Z"
                    fill="white"
                />
                <path
                    d="M-5.53125 305.215L96.0792 305.215L45.274 254.773L-5.53125 305.215Z"
                    fill="#FF6F00"
                />
                <path
                    d="M-5.53125 305.003L96.0792 305.003L45.274 355.445L-5.53125 305.003Z"
                    fill="#FF6F00"
                />
                <path
                    d="M70.748 49.9858C70.748 64.0806 82.1874 75.5105 96.2937 75.5105L96.2937 24.4561C82.1874 24.4561 70.748 35.886 70.748 49.9858Z"
                    fill="#FF6F00"
                />
                <path
                    d="M45.582 75.4748L45.582 49.8225L70.7496 49.8225L70.7496 75.4748L45.582 75.4748Z"
                    fill="white"
                />
                <path
                    d="M70.8066 100.862L70.8066 75.4442L96.245 75.4442L96.245 100.862L70.8066 100.862Z"
                    fill="white"
                />
                <path
                    d="M96.2852 101.107L96.2852 48.0255L147.898 48.0255L147.898 101.107L96.2852 101.107Z"
                    fill="#FFD500"
                />
                <path
                    d="M133.866 85.8941C127.741 92.0144 117.81 92.0144 111.684 85.8941C105.559 79.7737 105.559 69.8507 111.684 63.7303C117.81 57.61 127.741 57.61 133.866 63.7303C139.992 69.8507 139.992 79.7737 133.866 85.8941Z"
                    fill="white"
                />
                <path
                    d="M30.0238 151.63C30.0238 171.304 14.062 187.252 -5.62775 187.252C-25.3176 187.252 -41.2793 171.304 -41.2793 151.63C-41.2793 131.957 -25.3176 116.008 -5.62776 116.008C14.062 116.008 30.0238 131.957 30.0238 151.63Z"
                    fill="white"
                />
                <path
                    d="M-0.232827 171.955C-11.4652 175.015 -23.0533 168.397 -26.1156 157.174C-29.1779 145.951 -22.5547 134.372 -11.3224 131.312C-0.0900101 128.253 11.4981 134.87 14.5604 146.093C17.6227 157.317 10.9995 168.895 -0.232827 171.955Z"
                    fill="#172BDE"
                />
                <path
                    d="M70.7645 152.284C70.7645 159.247 65.1145 164.893 58.145 164.893C51.1754 164.893 45.5254 159.247 45.5254 152.284C45.5254 145.32 51.1754 139.674 58.1449 139.674C65.1145 139.674 70.7645 145.32 70.7645 152.284Z"
                    fill="#FF6F00"
                />
                <path
                    d="M147.953 -78L147.953 24.9461C147.953 38.9285 159.316 50.2819 173.31 50.2819C187.304 50.2819 198.666 38.9285 198.666 24.9461L198.666 -78L147.958 -78L147.953 -78Z"
                    fill="#172BDE"
                />
                <path
                    d="M147.959 24.6602L147.959 -1.87524L173.387 -1.87525L173.387 24.6602L147.959 24.6602Z"
                    fill="#FFD500"
                />
                <path
                    d="M173.387 24.6653L198.682 -1.10441L173.387 -26.869L173.387 24.6653Z"
                    fill="white"
                />
                <path
                    d="M198.697 152.003L198.697 50.2104L147.896 101.107L198.697 152.003Z"
                    fill="#FF6F00"
                />
                <path
                    d="M198.696 75.6228L173.191 101.107L198.696 126.59L198.696 75.6228Z"
                    fill="white"
                />
                <path
                    d="M197.794 152.003L197.794 50.2104L248.594 101.107L197.794 152.003Z"
                    fill="#FF6F00"
                />
                <path
                    d="M197.794 75.6228L223.299 101.107L197.794 126.59L197.794 75.6228Z"
                    fill="white"
                />
                <path
                    d="M-5.58594 203.282L-5.58594 203.44C-5.58594 217.351 5.71547 228.643 19.6379 228.643L45.5923 228.643L45.5923 228.485C45.5923 214.574 34.2909 203.282 20.3685 203.282L-5.58594 203.282Z"
                    fill="white"
                />
                <path
                    d="M45.5918 228.842L45.5918 228.643L19.6885 228.643C5.74566 228.643 -5.57618 239.956 -5.57618 253.887L-5.57618 254.086L20.3271 254.086C34.27 254.086 45.5918 242.774 45.5918 228.842Z"
                    fill="#FFD500"
                />
                <path
                    d="M20.1683 24.599L-31.8886 24.599C-45.6475 24.599 -56.8008 35.7431 -56.8008 49.4958L-4.74381 49.4958C9.01508 49.4958 20.1683 38.3517 20.1683 24.6041L20.1683 24.599Z"
                    fill="#6CD331"
                />
                <path
                    d="M-56.8008 100.734L-56.8008 100.897L20.2961 100.897C34.2491 100.897 45.5761 89.5798 45.5761 75.6382L45.5761 75.4748L-31.5208 75.4749C-45.4738 75.4749 -56.8008 86.7925 -56.8008 100.734Z"
                    fill="white"
                />
                <path
                    d="M96.2846 228.531C96.2846 242.518 84.9367 253.857 70.9382 253.857C56.9398 253.857 45.5918 242.518 45.5918 228.531C45.5918 214.544 56.9398 203.205 70.9382 203.205C84.9366 203.205 96.2846 214.544 96.2846 228.531Z"
                    fill="#FF6F00"
                />
                <path
                    d="M83.9419 234.034C80.9003 241.225 72.6003 244.591 65.4034 241.552C58.2064 238.513 54.8378 230.22 57.8794 223.029C60.921 215.838 69.221 212.472 76.4179 215.511C83.6149 218.55 86.9835 226.843 83.9419 234.034Z"
                    fill="white"
                />
                <path
                    d="M1.99024 279.744L13.4705 286.018L19.7496 297.483L26.0287 286.018L37.5038 279.744L26.0287 273.47L19.7496 261.999L13.4705 273.47L1.99024 279.744Z"
                    fill="white"
                />
                <path
                    d="M130.061 133.497L141.541 139.766L147.815 151.237L154.094 139.766L165.574 133.497L154.094 127.223L147.815 115.753L141.541 127.223L130.061 133.497Z"
                    fill="white"
                />
                <path
                    d="M-25.6758 -0.987007L-12.6884 6.10885L-5.58155 19.0907L1.52525 6.10885L14.5127 -0.987009L1.52525 -8.08797L-5.58156 -21.0698L-12.6884 -8.08797L-25.6758 -0.987007Z"
                    fill="#172BDE"
                />
                <path
                    d="M96.0281 279.478C81.9218 279.478 70.4824 290.908 70.4824 305.003L121.579 305.003C121.579 290.908 110.14 279.478 96.0281 279.478Z"
                    fill="#FF4081"
                />
                <path
                    d="M96.0281 329.484C81.9218 329.484 70.4824 318.054 70.4824 303.959L121.579 303.959C121.579 318.054 110.14 329.484 96.0281 329.484Z"
                    fill="#FF4081"
                />
                <path
                    d="M198.709 202.679L147.795 253.551L96.8775 202.675L147.791 151.803L198.709 202.679Z"
                    fill="white"
                />
                <path
                    d="M170.666 202.781L147.898 225.53L125.131 202.781L147.898 180.033L170.666 202.781Z"
                    fill="#FFD500"
                />
                <path
                    d="M199.045 253.686L147.918 304.771L97.1739 254.069L148.301 202.984L199.045 253.686Z"
                    fill="#172BDE"
                />
                <path
                    d="M170.619 253.619L147.852 276.367L125.084 253.619L147.852 230.87L170.619 253.619Z"
                    fill="white"
                />
                <path
                    d="M147.958 48.0256L137.025 48.0256C137.025 39.8066 130.347 33.1192 122.127 33.1192C113.906 33.1192 107.239 39.8066 107.239 48.0256L96.2949 48.0256C96.2949 33.7675 107.888 22.1742 122.127 22.1742C136.366 22.1742 147.958 33.7675 147.958 48.0256Z"
                    fill="white"
                />
                <path
                    d="M198.697 153.468L198.697 164.239C190.589 164.239 183.983 170.82 183.983 178.921C183.983 187.023 190.584 193.593 198.697 193.593L198.697 204.374C184.627 204.374 173.188 192.955 173.188 178.921C173.188 164.888 184.627 153.468 198.697 153.468Z"
                    fill="#6CD331"
                />
                <path
                    d="M197.795 153.468L197.795 164.239C205.903 164.239 212.509 170.82 212.509 178.921C212.509 187.023 205.908 193.593 197.795 193.593L197.795 204.374C211.865 204.374 223.305 192.955 223.305 178.921C223.305 164.888 211.865 153.468 197.795 153.468Z"
                    fill="#6CD331"
                />
                <path
                    d="M145.45 74.8162C145.45 87.3286 135.299 97.4719 122.776 97.4719C110.253 97.4719 100.102 87.3286 100.102 74.8162C100.102 62.3038 110.253 52.1605 122.776 52.1605C135.299 52.1605 145.45 62.3038 145.45 74.8162Z"
                    stroke="white"
                    strokeWidth="1.44"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M25.0607 182.442C8.02932 199.459 -19.584 199.459 -36.6154 182.442C-53.6467 165.425 -53.6468 137.834 -36.6154 120.817C-19.584 103.799 8.02932 103.799 25.0607 120.817C42.0921 137.834 42.0921 165.425 25.0607 182.442Z"
                    stroke="white"
                    strokeWidth="1.44"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M110.131 254.026L148.256 215.932L186.095 253.741L147.97 291.834L110.131 254.026Z"
                    stroke="white"
                    strokeWidth="1.44"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M68.5021 151.676L-56.6309 151.676"
                    stroke="white"
                    strokeWidth="1.44"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.6543 28.9891L20.6543 74.0861"
                    stroke="white"
                    strokeWidth="1.44"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <ellipse
                    cx="198.422"
                    cy="178.8"
                    rx="15.6893"
                    ry="15.6968"
                    fill="#E8547E"
                />
            </svg>
            <svg
                width="339"
                height="184"
                viewBox="0 0 339 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-0"

            >
                <path
                    d="M338.834 0.0430908H492.562V61.7475H338.834V0.0430908Z"
                    fill="#FFD500"
                />
                <path
                    d="M276.865 61.7413H492.562V123.378H276.865V61.7413Z"
                    fill="#FF6F00"
                />
                <path
                    d="M492.562 123.372H276.114C242.396 123.372 215.025 150.744 215.025 184.461H492.562V123.372Z"
                    fill="#FF4081"
                />
                <path
                    d="M30.9336 184.467L215.019 184.467C215.019 150.75 187.648 123.378 153.93 123.378L30.9336 123.378L30.9336 184.467Z"
                    fill="#FFD500"
                />
                <path
                    d="M276.865 123.372L30.9336 123.372L30.9336 61.7353L276.865 61.7353V123.372Z"
                    fill="#6CD331"
                />
                <path
                    d="M339.142 61.5505L30.7796 61.5505H30.7734V61.4222L30.7737 60.1538C30.777 43.5876 44.2075 30.1597 60.7737 30.1597L339.142 30.1597V61.5505Z"
                    fill="#172BDE"
                />
                <path
                    d="M399.97 184.662L338.473 123.164L399.761 61.8752L461.259 123.373L399.97 184.662Z"
                    fill="white"
                />
                <path
                    d="M30.9319 61.8027V184.215L91.75 123.009L30.9319 61.8027Z"
                    fill="#FF6F00"
                />
                <path
                    d="M338.25 153.698C321.256 153.698 307.475 167.479 307.475 184.473H369.031C369.031 167.479 355.25 153.698 338.25 153.698Z"
                    fill="#FF6F00"
                />
                <path
                    d="M307.516 123.378H338.445V153.698H307.516V123.378Z"
                    fill="white"
                />
                <path
                    d="M276.909 153.766H307.555V184.412H276.909V153.766Z"
                    fill="white"
                />
                <path
                    d="M121.871 0H153.262V30.1598H91.7111C91.7111 13.503 105.214 0 121.871 0Z"
                    fill="#A400EA"
                />
                <path
                    d="M60.6701 61.7538H92.0547V30.3691L60.6701 61.7538Z"
                    fill="#FF4081"
                />
                <path
                    d="M153.418 61.7352H122.766V30.2397L153.418 61.7352Z"
                    fill="#FF4081"
                />
                <path
                    d="M92.1627 30.2397H122.766V61.7413H92.1627V30.2397Z"
                    fill="white"
                />
                <path
                    d="M153.875 0H276.977V30.1598H153.875V0Z"
                    fill="#FFD500"
                />
                <path
                    d="M153.418 30.2397H184.852V61.729H153.418V30.2397Z"
                    fill="#FF6F00"
                />
                <path
                    d="M338.84 30.2275V0.0431347L245.942 0.0431347C229.28 0.0431347 215.757 13.5658 215.757 30.2275L338.84 30.2275Z"
                    fill="#FF4081"
                />
                <path
                    d="M215.695 104.636C191.974 104.636 172.745 85.4065 172.745 61.6858C172.745 37.9652 191.974 18.7358 215.695 18.7358C239.415 18.7358 258.645 37.9652 258.645 61.6858C258.645 85.4065 239.415 104.636 215.695 104.636Z"
                    fill="white"
                />
                <path
                    d="M191.188 68.1861C187.499 54.6543 195.478 40.6939 209.01 37.0047C222.542 33.3155 236.502 41.2946 240.191 54.8264C243.88 68.3582 235.901 82.3186 222.37 86.0078C208.838 89.697 194.877 81.7179 191.188 68.1861Z"
                    fill="#172BDE"
                />
                <path
                    d="M214.906 153.717C206.51 153.717 199.703 146.91 199.703 138.514C199.703 130.117 206.51 123.311 214.906 123.311C223.303 123.311 230.109 130.117 230.109 138.514C230.109 146.91 223.303 153.717 214.906 153.717Z"
                    fill="#FF6F00"
                />
                <path
                    d="M153.418 61.7354H153.227C136.455 61.7354 122.84 75.3503 122.84 92.1229V123.391H123.03C139.803 123.391 153.418 109.776 153.418 93.003V61.7354Z"
                    fill="white"
                />
                <path
                    d="M122.601 123.391H122.841V92.1845C122.841 75.3873 109.201 61.7477 92.4041 61.7477H92.1641L92.1641 92.9539C92.1641 109.751 105.804 123.391 122.601 123.391Z"
                    fill="#FFD500"
                />
                <path
                    d="M368.859 92.763V30.0492C368.859 13.4736 355.423 0.0371094 338.841 0.0371094V62.751C338.841 79.3266 352.278 92.763 368.853 92.763H368.859Z"
                    fill="#6CD331"
                />
                <path
                    d="M277.064 0.0371094H276.867V92.9169C276.867 109.726 290.513 123.372 307.323 123.372H307.52V30.4923C307.52 13.6829 293.874 0.0371094 277.064 0.0371094Z"
                    fill="white"
                />
                <path
                    d="M122.976 184.461C106.112 184.461 92.4412 170.79 92.4412 153.926C92.4412 137.062 106.112 123.391 122.976 123.391C139.841 123.391 153.512 137.062 153.512 153.926C153.512 170.79 139.841 184.461 122.976 184.461Z"
                    fill="#FF6F00"
                />
                <path
                    d="M116.34 169.593C107.67 165.928 103.612 155.929 107.276 147.259C110.94 138.589 120.939 134.531 129.61 138.195C138.28 141.859 142.338 151.858 138.674 160.529C135.01 169.199 125.011 173.257 116.34 169.593Z"
                    fill="white"
                />
                <path
                    d="M61.23 70.8633L53.6655 84.6937L39.8412 92.2583L53.6655 99.8228L61.23 113.647L68.7946 99.8228L82.625 92.2583L68.7946 84.6937L61.23 70.8633Z"
                    fill="white"
                />
                <path
                    d="M61.5469 184.153C61.5469 167.159 47.7657 153.378 30.7716 153.378V214.935C47.7657 214.935 61.5469 201.153 61.5469 184.153Z"
                    fill="#FF4081"
                />
                <path
                    d="M0 184.153C0 167.159 13.7812 153.378 30.7753 153.378V214.935C13.7812 214.935 0 201.153 0 184.153Z"
                    fill="#FF4081"
                />
            </svg>

            <h1 className="font-bold text-3xl">Bienvenido</h1>
            <h2 className="font-semibold">
                Ingresa tus datos para acceder a tu cuenta.
            </h2>
            <FormWrapper
                formAction={action}
                className="flex flex-col gap-4 p-3 w-full px-[30%]"
                schema={schema}
                lastResult={lastResult}
            >
                <Input
                    name="email"
                    label="Correo Electronico"
                    type="email"
                    className="rounded-full border border-[#172bde] py-1 px-4 w-full"
                ></Input>
                <Input
                    name="password"
                    label="Contraseña"
                    type="password"
                    className="rounded-full border border-[#172bde] py-1 px-4 w-full"
                ></Input>
                <Link
                    href={"/"}
                    className="text-xs text-gray-500"
                >
                    Olvide mi Contraseña
                </Link>
                <button
                    type="submit"
                    className="bg-[#172bde] text-white px-4 py-2 rounded-full text-sm min-w-24 flex justify-center hover:bg-[#1220a1]"
                >
                    {isPending ? (
                        <>
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-[#172bde]"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </>
                    ) : (
                        "Iniciar Sesion"
                    )}
                </button>
            </FormWrapper>
        </div>
    );
}
