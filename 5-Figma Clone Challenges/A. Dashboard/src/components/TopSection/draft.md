      <div className='card-component'>
          <Card >
            <div>
              <div className='top-card'>
                <div className='top-card-each-col'>
                  <FaBitcoin size={20} style={{ color: "white", backgroundColor: "#FFC246", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }} />
                </div>
                <div className='top-card-text top-card-each-col'>
                  <h1>BTC</h1>
                  <p>Bitcoin</p>
                </div>
                <div className="top-card-currency">
                  <h1>¥ 721,882</h1>
                  <p className='pink-font'>-4.66%  <GoArrowDown /></p>
                </div>

              </div>

              <div>
                <div style={{ width: '100%', height: '100px' }}>
                  <LineChart3 data={chartData} />
                  {/* {components.map(([label, Comp]) => {
                    return (
                      <div key={label + ""}>
                        <h1>{label}</h1>
                        <div>
                          <Comp />
                        </div>
                      </div>
                    );
                  })} */}
                  {/* <div style={{ height: "50rem" }} /> */}
                </div>
              </div>
            </div>

          </Card>
        </div>


          <div className='card-component'>
            <Card>
              <div>
                <div className='top-card'>
                  <div className='top-card-each-col'>
                    <TbBrandNem size={20} style={{ color: "white", backgroundColor: "#07BEAA", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }}/>
                  </div>
                  <div className='top-card-text'>
                    <h1>XEM</h1>
                    <p>NEM</p>
                  </div>
                  <div className="top-card-currency">
                    <h1>¥ 10.604</h1>
                    <p className='pink-font'>-1.07%  <GoArrowDown /></p>
                  </div>
                </div>

                <div>
                  <div style={{ width: '100%', height: '100px' }}>
                    <LineChart3 data={chartData3} />
                  </div>
                </div>

              </div>
            </Card>
          </div>

          <div className='card-component'>
            <Card>
              <div>
                <div className='top-card'>
                  <div className='top-card-each-col'>
                    <SiXrp size={20} style={{ color: "white", backgroundColor: "#1786C4", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }}/>
                  </div>
                  <div className='top-card-text'>
                    <h1>XRP</h1>
                    <p>Ripple</p>
                  </div>
                  <div className="top-card-currency">
                    <h1>¥ 50.839</h1>
                    <p className='green-font'>+0.66% <BsArrowUp /> </p>
                  </div>
                </div>
              </div>

              <div>
                  <div style={{ width: '100%', height: '100px' }}>
                    <LineChart3 data={chartData4} />
                  </div>
              </div>
            </Card>
          </div>
