import './styles/index.scss'
const ShootStart = () => {
    return (
        <div class="m-container">
            <div class="circle-container">
                {/*天空部分*/}
                <div class="sky">
                    <div class="sky-night sky-night-fade">
                        <div class="stars stars-fade">
                            <div class="shooting-star shooting"></div>
                            <div class="star-group-1"></div>
                            <div class="star-group-2"></div>
                            <div class="star-group-3"></div>
                            <div class="star-group-4"></div>
                        </div>
                    </div>
                </div>

                {/*山川*/}
                <div class="mountains">
                    <div class="mountain-back mountain-back-night">
                        <div class="mountain-back-1 mountain-back-night"></div>
                        <div class="mountain-back-2 mountain-back-night"></div>
                    </div>
                    <div class="mountain-middle mountain-middle-night">
                        <div class="mountain-middle-1 mountain-middle-night"></div>
                        <div class="mountain-middle-2 mountain-middle-night"></div>
                    </div>
                    <div class="mountain-top mountain-top-night">
                        <div class="mountain-top-1 mountain-top-night"></div>
                    </div>
                </div>

                {/*太阳*/}
                <div class="sun-container">
                    <div class="sun"></div>
                </div>

                {/*海洋*/}
                <div class="ocean animation-stop">
                    <div class="boat boat-sail"></div>
                    <div class="ocean-night ocean-night-fade">
                        <div class="moon moon-fade"></div>

                        {/*山川*/}
                        <div class="mountains mountains-bottom">
                            <div class="mountain-back mountain-back-night">
                                <div class="mountain-back-1 mountain-back-night"></div>
                                <div class="mountain-back-2 mountain-back-night"></div>
                            </div>
                            <div class="mountain-middle mountain-middle-night">
                                <div class="mountain-middle-1 mountain-middle-night"></div>
                                <div class="mountain-middle-2 mountain-middle-night"></div>
                            </div>
                            <div class="mountain-top mountain-top-night">
                                <div class="mountain-top-1 mountain-top-night"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShootStart;