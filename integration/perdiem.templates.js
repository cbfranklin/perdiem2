var template_multiple_rates = '{{#rates}} <h4 class="perdiem-step"><span class="perdiem-step-number">4</span> Multiple Rates are Available. Please Choose One:</h4> <br> {{#fy1}} <label for="perdiem-fiscal-year-1">Fiscal Year {{year}}, Destination County</label> <select id="perdiem-fiscal-year-1" class="form-control swiper-no-swiping"> <option value="">Select a Destination</option> {{#rates}} <option>{{county}} including {{city}}</option> {{/rates}} </select> {{/fy1}} {{#fy2}}{{#multiple}} <br> <label for="perdiem-fiscal-year-2">Fiscal Year {{year}}, Destination County</label> <select id="perdiem-fiscal-year-2" class="form-control swiper-no-swiping"> <option value="">Select a Destination</option> {{#rates}} <option>{{county}} including {{city}}</option> {{/rates}} </select> {{/multiple}}{{/fy2}} <br> <div class="row"> <div class="col-sm-6"> <button id="perdiem-to-date-range" class="btn btn-default btn-block"> Back</button> </div> <div class="col-sm-6"> <button id="perdiem-rates-selected" class="btn btn-primary btn-block disabled" disabled>Next </button> </div> </div> {{/rates}}';

var template_calculator_results = '{{#perDiemSearch}} {{#query}} <h4>Your search for<span class="perdiem-unbold">{{#city}} {{city}}{{#stateFormatted}},{{/stateFormatted}}{{/city}}{{#stateFormatted}} {{stateFormatted}}{{/stateFormatted}}{{#zip}} {{zip}}{{/zip}}</span></h4> <h5>Using rates for {{/query}}<span class="perdiem-unbold">{{rates.fy1.rate.county}} including {{rates.fy1.rate.city}}{{#rates.fy2.rate.county}}{{^sameRate}} and {{rates.fy2.rate.county}} including {{rates.fy2.rate.county}}{{/sameRate}}{{/rates.fy2.rate.county}}:</span></h5> {{#results}} <div class="well well-info-bright"> <div class="row"> <div class="col-sm-3"> <h4><strong>Daily Per Diem Rates:</strong></h4> </div> <div class="col-sm-9"> <h4></h4> {{#rateInfo}} <p>{{date}} Lodging: ${{lodging}}</p> <p>{{date}} M&amp;IE: ${{mie}}</p> {{/rateInfo}} </div> </div> </div> <div class="well well-info"> <div class="row"> <div class="col-sm-3"> <h4>Estimated Per Diem Total:</h4> </div> <div class="col-sm-9"> <h4>${{totalFormatted}}</h4></div> </div> </div> <div class="panel-group" id="perdiem-trip-breakdown-accordion" role="tablist" aria-multiselectable="true"> <div class="panel panel-info"> <div class="panel-heading" role="tab" id="headingOne"> <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#perdiem-trip-breakdown-accordion" href="#perdiem-trip-breakdown-accordion-content" aria-expanded="false" aria-controls="collapseOne"> Breakdown <span class="glyphicon glyphicon-chevron-down"></span> </a> </h4> </div> <div id="perdiem-trip-breakdown-accordion-content" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> <div class="panel-body"> <table class="table table-striped"> <thead> <th>Date</th> <th>Max. Lodging</th> <th>M&amp;IE</th> <th>Total</th> </thead> <tbody> {{#breakdown}} <tr> <td>{{date}}{{#isRate}} Rate{{/isRate}}{{#fullDate}} ({{fullDate}}){{/fullDate}}</td> <td>{{#lodging}}${{lodging}}{{/lodging}}{{^lodging}}-{{/lodging}}</td> <td>${{mie}}{{#isFirstLast}}*{{/isFirstLast}}</td> <td>${{total}}</td> </tr> {{/breakdown}} </tbody> </table> <div class="well well-khaki"> *The first and last calendar dates of M&amp;IE are calculated at 75% </div> </div> </div> </div> </div> {{/results}} {{/perDiemSearch}}';

var template_calculator_results_print = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" /> <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css"> <style> body {font-family: "Source Sans Pro"; } .panel-body{font-size:10px} </style> <div class="container"> {{#perDiemSearch}} {{#query}} <h2>Your search for<span class="perdiem-unbold">{{#city}} {{city}}{{#stateFormatted}},{{/stateFormatted}}{{/city}}{{#stateFormatted}} {{stateFormatted}}{{/stateFormatted}}{{#zip}} {{zip}}{{/zip}}</span></h1> <h3>Using rates for {{/query}}<span class="perdiem-unbold">{{rates.fy1.rate.county}} including {{rates.fy1.rate.city}}{{#rates.fy2.rate.county}}{{^sameRate}} and {{rates.fy2.rate.county}} including {{rates.fy2.rate.county}}{{/sameRate}}{{/rates.fy2.rate.county}}:</span></h3> {{#results}}  <div> <div class="row"> <div class="col-sm-3"> <h4><strong>Daily Per Diem Rates:</strong></h4> </div> <div class="col-sm-9"> <h4></h4> {{#rateInfo}} <p>{{date}} Lodging: ${{lodging}}</p> <p>{{date}} M&amp;IE: ${{mie}}</p> {{/rateInfo}} </div> </div> </div>  <div> <div class="row"> <div class="col-sm-3"> <h4><strong>Estimated Per Diem Total:</strong></h4> </div> <div class="col-sm-9"> <h4>${{totalFormatted}}</h4></div> </div> </div>  <h4>Breakdown:</h4> <table class="table table-striped"> <thead> <th>Date</th> <th>Max. Lodging</th> <th>M&amp;IE</th> <th>Total</th> </thead> <tbody> {{#breakdown}} <tr> <td>{{date}}{{#isRate}} Rate{{/isRate}}{{#fullDate}} ({{fullDate}}){{/fullDate}}</td> <td>{{#lodging}}${{lodging}}{{/lodging}}{{^lodging}}-{{/lodging}}</td> <td>${{mie}}{{#isFirstLast}}*{{/isFirstLast}}</td> <td>${{total}}</td> </tr> {{/breakdown}} </tbody> </table> <p>*The first and last calendar dates of M&amp;IE are calculated at 75%</p> {{/results}} {{/perDiemSearch}}  <h4>Additional Terms and Conditions:</h4>'