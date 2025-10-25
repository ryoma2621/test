
import React from 'react';
import type { Slide } from './types';

// Simple SVG Icons for use in slides
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ArrowRight: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const FacePhoto: React.FC<{ seed: string }> = ({ seed }) => (
    <img src={`https://picsum.photos/seed/${seed}/150/150`} alt="顔写真" className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg border-4 border-white" />
);

const slides: Slide[] = [
    {
        id: 1,
        content: (
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <div className="w-20 h-20 mb-8 bg-[#4A90E2] rounded-2xl flex items-center justify-center text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ fontFamily: 'sans-serif' }}>AI業務革新プログラム</h1>
                <p className="mt-6 text-xl md:text-2xl lg:text-3xl font-medium text-gray-600">御社の業務効率化を2ヶ月で実現</p>
                <div className="flex items-center space-x-8 mt-12">
                    <div className="text-center">
                        <FacePhoto seed="oikawa" />
                        <p className="mt-3 text-lg font-bold">及川諒真</p>
                    </div>
                    <div className="text-3xl font-light text-gray-400">&times;</div>
                    <div className="text-center">
                        <FacePhoto seed="akashi" />
                        <p className="mt-3 text-lg font-bold">明時ハルキ</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        content: (
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed">AI人材が一人もいない会社でも</h2>
                <div className="my-8">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold">2ヶ月で</p>
                    <p className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-[#FF6B35] my-4 tracking-tighter">業務時間50%削減</p>
                </div>
            </div>
        )
    },
    {
        id: 3,
        content: (
            <div className="flex flex-col items-center justify-center h-full w-full text-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">貴社が受け取れるもの</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 text-xl lg:text-2xl w-full max-w-4xl">
                    <div className="flex items-center space-x-5">
                        <UserGroupIcon className="w-12 h-12 text-[#4A90E2] flex-shrink-0" />
                        <div>
                            <h3 className="font-bold">全社員対応</h3>
                            <p className="text-lg text-gray-600">何名でも一律40万円</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <CogIcon className="w-12 h-12 text-[#4A90E2] flex-shrink-0" />
                        <div>
                            <h3 className="font-bold">完全カスタマイズ</h3>
                            <p className="text-lg text-gray-600">御社専用の研修設計</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <ClockIcon className="w-12 h-12 text-[#4A90E2] flex-shrink-0" />
                        <div>
                            <h3 className="font-bold">24時間サポート</h3>
                            <p className="text-lg text-gray-600">いつでも質問OK</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <CalendarIcon className="w-12 h-12 text-[#4A90E2] flex-shrink-0" />
                        <div>
                            <h3 className="font-bold">2ヶ月で完結</h3>
                            <p className="text-lg text-gray-600">短期集中プログラム</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        content: (
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">2人で<span className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#FF6B35] mx-2">1,400</span>人以上の</h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">AI導入実績</h2>
                <div className="flex flex-col md:flex-row items-center justify-around w-full mt-10 space-y-8 md:space-y-0">
                    <div className="text-center flex flex-col items-center">
                        <FacePhoto seed="oikawa" />
                        <h3 className="text-2xl font-bold mt-4">及川諒真</h3>
                        <ul className="mt-2 text-lg text-gray-600 list-disc list-inside text-left">
                            <li>400人以上</li>
                            <li>塾CS 1/3削減</li>
                            <li>月商6億営業自動化</li>
                        </ul>
                    </div>
                    <div className="text-center flex flex-col items-center">
                        <FacePhoto seed="akashi" />
                        <h3 className="text-2xl font-bold mt-4">明時ハルキ</h3>
                        <ul className="mt-2 text-lg text-gray-600 list-disc list-inside text-left">
                            <li>500人以上</li>
                            <li>年商数十億企業</li>
                            <li>法人数十社</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 5,
        content: (
            <div className="flex flex-col items-center justify-center h-full w-full text-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">なぜ他社の研修は失敗するのか</h2>
                <div className="grid grid-cols-2 gap-8 w-full max-w-3xl text-2xl lg:text-3xl font-semibold">
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-400">
                            <XCircleIcon className="w-10 h-10 mr-4 text-red-400"/>
                            <span>汎用的</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                            <XCircleIcon className="w-10 h-10 mr-4 text-red-400"/>
                            <span>座学中心</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                            <XCircleIcon className="w-10 h-10 mr-4 text-red-400"/>
                            <span>フォローなし</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                         <div className="flex items-center text-[#4A90E2]">
                            <CheckCircleIcon className="w-10 h-10 mr-4"/>
                            <span className="font-bold">御社専用</span>
                        </div>
                         <div className="flex items-center text-[#4A90E2]">
                            <CheckCircleIcon className="w-10 h-10 mr-4"/>
                            <span className="font-bold">実践型</span>
                        </div>
                         <div className="flex items-center text-[#4A90E2]">
                            <CheckCircleIcon className="w-10 h-10 mr-4"/>
                            <span className="font-bold">24時間サポート</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 6,
        content: (
            <div className="flex flex-col items-center justify-center h-full w-full text-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">導入の流れ</h2>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                    {['契約', 'ヒアリング', '研修4回', 'サポート'].map((step, i) => (
                        <React.Fragment key={step}>
                            <div className="flex flex-col items-center text-center p-2">
                                <div className="w-16 h-16 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">{i+1}</div>
                                <h3 className="mt-3 text-xl font-bold">{step}</h3>
                                {i > 0 && <div className="text-sm text-gray-500 mt-1">
                                    {i === 1 && "業務分析"}
                                    {i === 2 && "2週間ごと"}
                                    {i === 3 && "2ヶ月付き"}
                                </div>}
                            </div>
                            {i < 3 && <ArrowRight className="w-8 h-8 text-gray-300 hidden md:block" />}
                        </React.Fragment>
                    ))}
                </div>
                <p className="mt-16 text-2xl font-semibold bg-[#FF6B35] text-white py-2 px-6 rounded-lg shadow-md">最短2週間で開始可能</p>
            </div>
        )
    },
    {
        id: 7,
        content: (
             <div className="flex flex-col items-center justify-center h-full w-full text-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-10">競合比較</h2>
                <div className="w-full max-w-3xl text-center text-lg">
                    <div className="grid grid-cols-4 font-bold bg-gray-100 p-3 rounded-t-lg">
                        <div></div>
                        <div>大手</div>
                        <div>中堅</div>
                        <div className="text-white bg-[#4A90E2] rounded">当社</div>
                    </div>
                    {['価格', 'カスタム', '人数制限', 'サポート'].map((item, i) => (
                        <div key={item} className={`grid grid-cols-4 p-3 items-center border-b ${i%2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <div className="font-bold text-left">{item}</div>
                            <div>{['300万〜', '◎', 'あり', '△'][i]}</div>
                            <div>{['50万〜', '△', 'あり', '×'][i]}</div>
                            <div className="font-bold text-[#4A90E2] text-xl">{['40万', '◎', 'なし', '◎'][i]}</div>
                        </div>
                    ))}
                </div>
                <p className="mt-10 text-3xl font-bold text-gray-700">「ちょうどいい」がここに</p>
            </div>
        )
    },
    {
        id: 8,
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-800">
                <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                    <h3 className="text-2xl font-semibold">投資額：<span className="text-4xl font-bold text-[#4A90E2]">40</span>万円</h3>
                </div>
                <div className="my-8 text-2xl font-bold text-gray-500">&darr;</div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                    <p className="text-2xl font-semibold">15名 &times; 月20万 &times; 30%削減</p>
                    <p className="text-4xl font-bold text-gray-700 mt-2">&darr;</p>
                    <p className="text-2xl font-semibold">月<span className="text-5xl font-extrabold text-[#4A90E2] mx-1">90</span>万円の削減効果</p>
                </div>
                <div className="mt-10 bg-[#FF6B35] text-white p-6 rounded-lg shadow-lg">
                    <p className="text-5xl md:text-7xl font-extrabold">1ヶ月で投資回収！</p>
                </div>
            </div>
        )
    },
    {
        id: 9,
        content: (
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">まずは無料相談から<br/>始めませんか？</h2>
                 <div className="flex items-center space-x-8 my-8">
                    <div className="text-center">
                        <FacePhoto seed="oikawa" />
                    </div>
                    <div className="text-3xl font-light text-gray-400">&times;</div>
                    <div className="text-center">
                        <FacePhoto seed="akashi" />
                    </div>
                </div>
                <p className="text-2xl font-bold">及川諒真 &times; 明時ハルキ</p>
                <div className="mt-6 text-lg space-y-2">
                    <p>📧 <a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></p>
                    <p>📱 <a href="tel:090-1234-5678" className="hover:underline">090-1234-5678</a></p>
                </div>
                <p className="mt-8 text-2xl font-bold text-[#FF6B35] p-3 bg-orange-50 rounded-md">「競合に遅れる前に、今すぐ」</p>
            </div>
        )
    },
];

export default slides;
