import React from 'react';
const Property = ({property}) =>
    <div className="single-property" key={property.id}>
        <h4>Address: {property.street_1} {property.street_2}, {property.city}, {property.state}, {property.zipcode}</h4>
        <p>Purchased for: {property.purchase_price}</p>
        <p>Bought on: {property.purchase_date}</p>
        {property.sale_price ? <p>{property.sale_price}</p> : <p>This property has not been sold.</p>}
        <p>{property.sale_date}</p>
        <a href="#">Add / view tenants of this property.</a><br></br>
        <a href="#">Create a maintenance request for this property.</a><br></br>
        <a href="#">Click to view a detailed cash flow table on this property.</a><br></br>
        <a href="#">Click to view a detailed investment analysis on this property.</a><br></br>
        <a href="#">File and/or manage an insurance claim for this property.</a>
    </div>
export default Property;
