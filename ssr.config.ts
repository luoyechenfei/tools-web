import fs from 'fs'
import seoPrerender from "vite-plugin-seo-prerender";

// 预渲染需要本机浏览器（Puppeteer）。按常见安装路径探测 Chrome/Edge，
// 找不到时（如 Docker 构建环境）跳过预渲染，避免构建失败。
const browserCandidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium-browser-stable',
]
const executablePath = browserCandidates.find(p => fs.existsSync(p))

export function seoperender(){
    if (!executablePath) {
        console.warn('[seo-prerender] 未找到可用的 Chrome/Edge，跳过预渲染')
        return { name: 'skip-seo-prerender' }
    }
    return seoPrerender({
        puppeteer: { executablePath },
        routes: [
            '/',
            '/timetran',
            '/md5',
            '/json',
            '/reg',
            '/unicode',
            '/wordcount',
            '/scaletran',
            '/signimage',
            '/randompassword',
            '/urlencode',
            '/ascii',
            '/uuid',
            '/barrage',
            '/unit',
            '/qrcode',
            '/decision',
            '/morse',
            '/random',
            '/numbertochinese',
            '/diff',
            '/markdown',
            '/texttoimg',
            '/webinfo',
            '/bar',
            '/line',
            '/pie',
            '/scatter',
            '/coin',
            '/dice',
            '/textremoveduplicate',
            '/imgcut',
            '/httpstatuscode',
            '/jwt',
            '/htmlentity',
            '/colorpicker',
            '/asciiwordpic',
            '/jsforamt',
            '/htmlformat',
            '/cssformat',
            '/textedit',
            '/base64',
            '/baseconverter',
            '/storageconverter',
            '/hashcalculator',
            '/xmlformat',
            '/sqlformat',
            '/textreplace',
            '/textworkflow',
            '/emoji',
            '/wordfrequency',
            '/wordcloud',
            '/lottery',
            '/rockpaperscissors',
            '/wheel',
            '/imagecolorpicker',
            '/pomodoro',
            '/calculator',
            '/reactiontest',
            '/m3u8player',
            '/imagewatermark',
            '/colorpalette',
            '/about'
        ],
        // network: true,
        // removeStyle: true
    })
}