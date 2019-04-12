import React, { Component } from 'react';
import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';

import './App.css';

export default () => (
    <div className="container">
        <ReactiveBase
            app="uBoat-test-app"
            credentials="3qrO6vlEh:dcef3f3f-0fa8-4f58-aeed-61c0dfc61718"
            theme={{
                primaryColor: '#FF3A4E',
            }}
        >
            <nav className="nav">
                <div className="title" href="/"><i className="fas fa-ship"></i>uBoat</div>
                <DataSearch
                    componentId="SearchSensor"
                    dataField="name"
                    autosuggest={false}
                    placeholder="Search by boat names"
                    iconPosition="left"
                    className="search"
                    highlight={true}
                />
                {/* Logout should go to landing page */}
                <div className="logout" href="#">Logout</div>
            </nav>
            <div className="left-col">
                <DateRange
                    dataField="date_from"
                    componentId="DateRangeSensor"
                    title="When"
                    numberOfMonths={2}
                    queryFormat="basic_date"
                    initialMonth={new Date('04-01-2017')}
                />

                <NumberBox
                    componentId="PassengerSensor"
                    dataField="accommodates"
                    title="Passengers"
                    defaultSelected={2}
                    labelPosition="right"
                    data={{
                        start: 1,
                        end: 16,
                    }}
                />

                <RangeSlider
                    componentId="PriceSensor"
                    dataField="price"
                    title="Price Range"
                    range={{
                        start: 250,
                        end: 5000,
                    }}
                    rangeLabels={{
                        start: '$250',
                        end: '$5000',
                    }}
                    defaultSelected={{
                        start: 10,
                        end: 50,
                    }}
                    stepValue={10}
                    interval={20}
                    react={{
                        and: ['DateRangeSensor'],
                    }}
                />
            </div>

            <ResultCard
                className="right-col"
                componentId="SearchResult"
                dataField="name"
                size={12}
                onData={data => ({
                    image: data.image,
                    title: data.name,
                    description: (
                        <div>
                            <div className="price">${data.price}</div>
                            <p className="info">{data.room_type} · {data.accommodates} guests</p>
                        </div>
                    ),
                    url: data.listing_url,
                })}
                pagination
                react={{
                    and: ['SearchSensor', 'PassengerSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
                }}
                innerClass={{
                    resultStats: 'result-stats',
                    list: 'list',
                    listItem: 'list-item',
                    image: 'image',
                }}
            />
        </ReactiveBase>
    </div>
);
