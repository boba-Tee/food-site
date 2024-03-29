import React from 'react';

// don't want to pass all the types every time DateTim is called, so set default values
DateTime.defaultProps = {
    options: {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
};

export default function DateTime({date, 
    options: { weekday, year, month, day, hour, minute, second },
}) {

    // get DateTime based on current user's locale
    var currentLocale = new Intl.DateTimeFormat().resolvedOptions().locale;

    const getDate = () => 
        new Intl.DateTimeFormat(currentLocale, {
            year,
            month,
            weekday,
            day,
            hour,
            minute,
            second,
        }).format(Date.parse(date));

    return <>{getDate()}</>;

}
