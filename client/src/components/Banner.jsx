export default function Banner() {
  return (
    <section className="banner  position-relative overflow-hidden">
      <div className="container">
        <div class="has-shapes">
          <svg
            class="shape shape-left text-light"
            width="381"
            height="443"
            viewBox="0 0 381 443"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M334.266 499.007C330.108 469.108 304.151 446.496 276.261 435.921C248.372 425.346 218.077 424.035 188.666 419.32C159.254 414.589 128.795 405.375 108.664 383.129C72.8533 343.535 83.3445 282.01 77.7634 228.587C69.3017 147.754 15.4873 73.3967 -58.0001 40.9907"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M349.584 485.51C345.427 455.611 319.469 433 291.58 422.425C263.69 411.85 233.395 410.538 203.984 405.823C174.573 401.092 144.114 391.878 123.982 369.632C88.1716 330.038 98.6628 268.513 93.0817 215.09C84.62 134.258 30.8056 59.8999 -42.6819 27.494"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M364.904 472.013C360.747 442.114 334.789 419.503 306.9 408.928C279.011 398.352 248.716 397.041 219.304 392.326C189.893 387.595 159.434 378.381 139.303 356.135C103.492 316.541 113.983 255.016 108.402 201.593C99.9403 120.76 46.1259 46.4028 -27.3616 13.9969"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M380.24 458.516C376.083 428.617 350.125 406.006 322.236 395.431C294.347 384.856 264.051 383.544 234.64 378.829C205.229 374.098 174.77 364.884 154.639 342.638C118.828 303.044 129.319 241.519 123.738 188.096C115.276 107.264 61.4619 32.906 -12.0255 0.500103"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
          </svg>
          <svg
            class="shape shape-right text-light"
            width="406"
            height="433"
            viewBox="0 0 406 433"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M101.974 -86.77C128.962 -74.8992 143.467 -43.2447 146.175 -12.7857C148.883 17.6734 142.273 48.1263 139.087 78.5816C135.916 109.041 136.681 141.702 152.351 167.47C180.247 213.314 240.712 218.81 289.413 238.184C363.095 267.516 418.962 340.253 430.36 421.687"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M118.607 -98.5031C145.596 -86.6323 160.101 -54.9778 162.809 -24.5188C165.517 5.94031 158.907 36.3933 155.72 66.8486C152.549 97.3082 153.314 129.969 168.985 155.737C196.881 201.581 257.346 207.077 306.047 226.451C379.729 255.783 435.596 328.52 446.994 409.954"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M135.241 -110.238C162.23 -98.3675 176.735 -66.7131 179.443 -36.254C182.151 -5.79492 175.541 24.6581 172.354 55.1134C169.183 85.573 169.948 118.234 185.619 144.002C213.515 189.846 273.98 195.342 322.681 214.716C396.363 244.048 452.23 316.785 463.627 398.219"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M151.879 -121.989C178.867 -110.118 193.373 -78.4638 196.081 -48.0047C198.789 -17.5457 192.179 12.9074 188.992 43.3627C185.821 73.8223 186.586 106.483 202.256 132.251C230.153 178.095 290.618 183.591 339.318 202.965C413.001 232.297 468.867 305.034 480.265 386.468"
              stroke="currentColor"
              stroke-miterlimit="10"
            ></path>
          </svg>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="block text-center text-lg-start pe-0 pe-xl-5">
              <h1 className="text-capitalize mb-4">
                Your event. Find or make it happen.
              </h1>
              <p className="mb-4">
                Look for the Events you are interested in.
                <br />
                You might want also publish your own event. Share with us!
              </p>{" "}
              <a type="button" className="btn btn-primary" href="#">
                About EventMe{" "}
                <span
                  style={{ fontSize: 14 }}
                  className="ms-2 fas fa-arrow-right"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps-lg-5 text-center">
              <img
                alt="banner image"
                className="w-100"
                loading="lazy"
                decoding="async"
                src="../../public/images/header-img.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
