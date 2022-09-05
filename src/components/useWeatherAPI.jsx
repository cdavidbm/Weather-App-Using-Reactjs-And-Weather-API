import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useWeatherAPI = () => {
    const huarmey = { latitude: -10.0707608, longitude: -78.150556 }
    const [isMetric, setIsMetric] = useState(true)
    const [currentGeolocation, setCurrentGeolocation] = useState()
    const [geolocation, setGeolocation] = useState(huarmey)
    const [data, setData] = useState()

    const loadData = () => {
        if (geolocation) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=2aa9b890a4f5aa99f3478fe6cb417d52&units=${isMetric?'metric':'standard'}&lang=es`)
                .then(res => setData(res.data))
        }
    }
    const getGeolocation = (pos) => {
        setCurrentGeolocation(pos.coords)
        setGeolocation(pos.coords)
    }
    const failGeolocation = (err) => {
        setGeolocation(huarmey)
    }
    const setLocation = location => setGeolocation(location?location:currentGeolocation)

    useEffect(() => navigator.geolocation.getCurrentPosition(getGeolocation, failGeolocation), [])
    useEffect(() => loadData(), [geolocation, isMetric])

    return { data, isMetric, setIsMetric, setLocation }
};

export default useWeatherAPI;