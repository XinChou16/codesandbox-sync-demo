import React from 'react'
import './HomePage.css';
import policeImg from './police.png';

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="container">
                <h2>夏日之歌</h2>
                <p className="poster-text">
                    温柔的海风
                    欢迎来到我的小站
                </p>
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201305%2F30%2F220025pxfkhykvkgkvuktq.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616990459&t=3e065295ae76a5a52c84f87daff491fa" alt="" />
            </div>
        
            <footer>
                <p>&copy; 2016-2022 &nbsp;<span role="img" aria-label="love">❤️</span></p>
                <div className="beian">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011102002518" alt="">
                        <img src={policeImg} alt="" />
                        粤公网安备44011102002518号
                    </a>
                    <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备17090507号</a>
                </div>
            </footer>
        </React.Fragment>
    )
}
