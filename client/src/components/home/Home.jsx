import { Link } from "react-router";

import { useHomeEvents } from "../../api/eventApi";
import { toShortDate, fromIsoTime } from "../../utils/dateTime";
import Banner from "./banner/Banner";

export default function Home() {
  const { homeEvents, pending } = useHomeEvents();
  return (
    <>
      <Banner></Banner>
      <section className="section section-events" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="section-title pt-4">
                <p className="text-primary text-uppercase fw-bold mb-3">
                  events
                </p>
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  Recent Events
                </h1>
                <p> Explore and attend our upcoming events!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="core-value bg-tertiary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="row position-relative gy-4">
                {pending && (
                  <div id="loader">
                    <img src="/images/loader.svg" />
                  </div>
                )}
                {!homeEvents.length && (
                  <div>
                    <h3 className="text-primary">
                      <i className="fa-solid fa-circle-info"></i> No data found!
                    </h3>
                  </div>
                )}
                {homeEvents.map((eventitem) => (
                  <div className="col-md-6 homepage-events" key={eventitem._id}>
                    <Link to={`/all-events/${eventitem._id}/details`}>
                      <div>
                        <div className="img-box">
                          <img
                            src={eventitem.imageUrl}
                            alt={eventitem.title}
                          ></img>
                        </div>
                        <h3 className="text-primary fw-bold mb-3 mt-3">
                          {eventitem.title}
                        </h3>
                        <div className="homepage-datetime">
                          <span> {toShortDate(eventitem.date)}</span>
                          <i className="fa-solid fa-calendar-check p-2"></i>{" "}
                          <span> {fromIsoTime(eventitem.time)} h.</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

                <div className="has-shapes">
                  <svg
                    className="shape shape-1 text-primary"
                    width={71}
                    height={71}
                    viewBox="0 0 119 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50598 89.8686C8.17023 89.3091 7.83449 88.6376 7.49875 88.078L66.0305 0.336418C66.7019 0.448334 67.3734 0.560249 68.0449 0.560249L8.50598 89.8686Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.03787 83.2646C4.70213 82.5932 4.47829 81.9217 4.14255 81.2502L58.3096 -0.00032826C59.093 -0.000328191 59.7645 -0.000328132 60.5479 -0.000328064L5.03787 83.2646Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.9007 100.613C16.453 100.165 16.0053 99.7175 15.5577 99.2698L79.4613 3.47031C80.0209 3.69414 80.6924 3.91795 81.252 4.14178L16.9007 100.613Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.5352 95.5762C12.0876 95.0166 11.7518 94.5689 11.3042 94.0094L72.9695 1.45541C73.641 1.56732 74.2006 1.79115 74.8721 1.90306L12.5352 95.5762Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.00101471 55.5103C0.11293 54.1673 0.224831 52.9362 0.336747 51.5932L29.6586 7.72242C30.7777 7.05093 31.8969 6.49136 33.1279 5.93178L0.00101471 55.5103Z"
                      fill="currentColor"
                    />
                    <path
                      d="M26.1887 108.334C25.9649 108.223 25.7411 107.999 25.5172 107.887L91.2115 9.40136C91.4353 9.51328 91.6592 9.7371 91.883 9.84901C92.2188 10.0728 92.4426 10.2967 92.7783 10.4086L27.084 108.894C26.8602 108.67 26.5245 108.558 26.1887 108.334Z"
                      fill="currentColor"
                    />
                    <path
                      d="M114.042 81.0269C112.587 84.7201 110.685 88.4133 108.334 91.8827C105.984 95.3521 103.41 98.4857 100.5 101.396L114.042 81.0269Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.335842 66.7012C0.223927 65.6939 0.112026 64.7986 0.000110881 63.7914L40.7373 2.79753C41.6326 2.46179 42.6398 2.23796 43.5352 2.01413L0.335842 66.7012Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2.23929 75.6538C2.01546 74.8704 1.79162 74.087 1.56779 73.3036L50.0271 0.558655C50.8105 0.446747 51.7059 0.334824 52.4893 0.222908L2.23929 75.6538Z"
                      fill="currentColor"
                    />
                    <path
                      d="M32.793 112.139C32.2335 111.915 31.6739 111.58 31.1143 111.244L96.4728 13.206C96.9205 13.6537 97.4801 13.9894 97.9277 14.4371L32.793 112.139Z"
                      fill="currentColor"
                    />
                    <path
                      d="M77.7822 115.161C76.8868 115.497 75.8796 115.72 74.9843 116.056L117.848 51.8168C117.96 52.824 118.072 53.7193 118.184 54.7266L77.7822 115.161Z"
                      fill="currentColor"
                    />
                    <path
                      d="M68.493 117.512C67.7096 117.624 66.8143 117.736 66.0309 117.848L116.057 42.8644C116.281 43.6478 116.505 44.4312 116.729 45.3265L68.493 117.512Z"
                      fill="currentColor"
                    />
                    <path
                      d="M60.0992 118.294C59.3158 118.294 58.6443 118.294 57.8609 118.294L113.259 35.2533C113.595 35.9248 113.819 36.5963 114.154 37.2678L60.0992 118.294Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.8245 105.087C21.3768 104.64 20.8172 104.304 20.3696 103.856L85.6162 6.15427C86.1758 6.37809 86.7354 6.71384 87.2949 7.04959L21.8245 105.087Z"
                      fill="currentColor"
                    />
                    <path
                      d="M89.0856 110.124C87.9665 110.795 86.7354 111.467 85.6162 112.026L118.184 63.1194C118.072 64.4624 117.96 65.8054 117.736 67.0364L89.0856 110.124Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.69339 38.2759C5.2602 34.135 7.27468 30.1061 9.84873 26.189C12.4228 22.3839 15.3326 18.9145 18.5781 15.8928L3.69339 38.2759Z"
                      fill="currentColor"
                    />
                    <path
                      d="M52.49 117.848C51.8185 117.736 51.147 117.736 50.4755 117.624L109.791 28.5392C110.126 29.0988 110.462 29.7703 110.798 30.3299L52.49 117.848Z"
                      fill="currentColor"
                    />
                    <path
                      d="M38.9475 114.712C38.388 114.489 37.7165 114.265 37.1569 114.041L101.396 17.6818C101.844 18.1295 102.292 18.5771 102.739 19.0248L38.9475 114.712Z"
                      fill="currentColor"
                    />
                    <path
                      d="M45.4392 116.728C44.7677 116.616 44.2081 116.392 43.5366 116.28L105.873 22.8306C106.321 23.3902 106.657 23.8378 107.105 24.3974L45.4392 116.728Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="shape shape-2 text-primary"
                    width={100}
                    height={100}
                    viewBox="0 0 119 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50598 89.8686C8.17023 89.3091 7.83449 88.6376 7.49875 88.078L66.0305 0.336418C66.7019 0.448334 67.3734 0.560249 68.0449 0.560249L8.50598 89.8686Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.03787 83.2646C4.70213 82.5932 4.47829 81.9217 4.14255 81.2502L58.3096 -0.00032826C59.093 -0.000328191 59.7645 -0.000328132 60.5479 -0.000328064L5.03787 83.2646Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.9007 100.613C16.453 100.165 16.0053 99.7175 15.5577 99.2698L79.4613 3.47031C80.0209 3.69414 80.6924 3.91795 81.252 4.14178L16.9007 100.613Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.5352 95.5762C12.0876 95.0166 11.7518 94.5689 11.3042 94.0094L72.9695 1.45541C73.641 1.56732 74.2006 1.79115 74.8721 1.90306L12.5352 95.5762Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.00101471 55.5103C0.11293 54.1673 0.224831 52.9362 0.336747 51.5932L29.6586 7.72242C30.7777 7.05093 31.8969 6.49136 33.1279 5.93178L0.00101471 55.5103Z"
                      fill="currentColor"
                    />
                    <path
                      d="M26.1887 108.334C25.9649 108.223 25.7411 107.999 25.5172 107.887L91.2115 9.40136C91.4353 9.51328 91.6592 9.7371 91.883 9.84901C92.2188 10.0728 92.4426 10.2967 92.7783 10.4086L27.084 108.894C26.8602 108.67 26.5245 108.558 26.1887 108.334Z"
                      fill="currentColor"
                    />
                    <path
                      d="M114.042 81.0269C112.587 84.7201 110.685 88.4133 108.334 91.8827C105.984 95.3521 103.41 98.4857 100.5 101.396L114.042 81.0269Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.335842 66.7012C0.223927 65.6939 0.112026 64.7986 0.000110881 63.7914L40.7373 2.79753C41.6326 2.46179 42.6398 2.23796 43.5352 2.01413L0.335842 66.7012Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2.23929 75.6538C2.01546 74.8704 1.79162 74.087 1.56779 73.3036L50.0271 0.558655C50.8105 0.446747 51.7059 0.334824 52.4893 0.222908L2.23929 75.6538Z"
                      fill="currentColor"
                    />
                    <path
                      d="M32.793 112.139C32.2335 111.915 31.6739 111.58 31.1143 111.244L96.4728 13.206C96.9205 13.6537 97.4801 13.9894 97.9277 14.4371L32.793 112.139Z"
                      fill="currentColor"
                    />
                    <path
                      d="M77.7822 115.161C76.8868 115.497 75.8796 115.72 74.9843 116.056L117.848 51.8168C117.96 52.824 118.072 53.7193 118.184 54.7266L77.7822 115.161Z"
                      fill="currentColor"
                    />
                    <path
                      d="M68.493 117.512C67.7096 117.624 66.8143 117.736 66.0309 117.848L116.057 42.8644C116.281 43.6478 116.505 44.4312 116.729 45.3265L68.493 117.512Z"
                      fill="currentColor"
                    />
                    <path
                      d="M60.0992 118.294C59.3158 118.294 58.6443 118.294 57.8609 118.294L113.259 35.2533C113.595 35.9248 113.819 36.5963 114.154 37.2678L60.0992 118.294Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.8245 105.087C21.3768 104.64 20.8172 104.304 20.3696 103.856L85.6162 6.15427C86.1758 6.37809 86.7354 6.71384 87.2949 7.04959L21.8245 105.087Z"
                      fill="currentColor"
                    />
                    <path
                      d="M89.0856 110.124C87.9665 110.795 86.7354 111.467 85.6162 112.026L118.184 63.1194C118.072 64.4624 117.96 65.8054 117.736 67.0364L89.0856 110.124Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.69339 38.2759C5.2602 34.135 7.27468 30.1061 9.84873 26.189C12.4228 22.3839 15.3326 18.9145 18.5781 15.8928L3.69339 38.2759Z"
                      fill="currentColor"
                    />
                    <path
                      d="M52.49 117.848C51.8185 117.736 51.147 117.736 50.4755 117.624L109.791 28.5392C110.126 29.0988 110.462 29.7703 110.798 30.3299L52.49 117.848Z"
                      fill="currentColor"
                    />
                    <path
                      d="M38.9475 114.712C38.388 114.489 37.7165 114.265 37.1569 114.041L101.396 17.6818C101.844 18.1295 102.292 18.5771 102.739 19.0248L38.9475 114.712Z"
                      fill="currentColor"
                    />
                    <path
                      d="M45.4392 116.728C44.7677 116.616 44.2081 116.392 43.5366 116.28L105.873 22.8306C106.321 23.3902 106.657 23.8378 107.105 24.3974L45.4392 116.728Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="container pb-100 pt-50">
                <Link
                  type="button"
                  className="btn btn-primary  mt-4 mb-4"
                  to="/all-events"
                >
                  See all Events
                  <span
                    style={{ fontSize: 14 }}
                    className="ms-2 fas fa-arrow-right"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
