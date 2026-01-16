// @flow
import * as React from 'react';
import Navbar from "@/components/Navbar";
import {Breadcrumbs} from "@/components/utils/Breadcrumbs";
import {BusinessOffers} from "@/components/offer/business/BusinessOffers";

const BusinessClient = () => {
    return (
        <>
            <Navbar/>
            <Breadcrumbs label={"ss"}/>
            <BusinessOffers />
        </>
    );
};

export default BusinessClient;