import React from "react";

function Card(props){
    let {price} = props
    return(
      <div>
      <section className="pricing py-5">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                <h6 class="card-price text-center">${price}<span class="period">/month</span></h6>
                <hr/>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                    Private Projects</li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                    Phone Support</li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
                  </li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                    Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="/" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
    </div>

    )
}
export default Card;