// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as Parse from "date-fns/parse";
import * as Format from "date-fns/format";
import * as Set_day from "date-fns/set_day";
import * as Js_null_undefined from "bs-platform/lib/es6/js_null_undefined.js";
import * as Add_days from "date-fns/add_days";
import * as Is_after from "date-fns/is_after";
import * as Set_date from "date-fns/set_date";
import * as Set_year from "date-fns/set_year";
import * as Sub_days from "date-fns/sub_days";
import * as Add_hours from "date-fns/add_hours";
import * as Add_weeks from "date-fns/add_weeks";
import * as Add_years from "date-fns/add_years";
import * as Is_before from "date-fns/is_before";
import * as Set_hours from "date-fns/set_hours";
import * as Set_month from "date-fns/set_month";
import * as Sub_hours from "date-fns/sub_hours";
import * as Sub_weeks from "date-fns/sub_weeks";
import * as Sub_years from "date-fns/sub_years";
import * as Add_months from "date-fns/add_months";
import * as Closest_to from "date-fns/closest_to";
import * as Sub_months from "date-fns/sub_months";
import * as Add_minutes from "date-fns/add_minutes";
import * as Add_seconds from "date-fns/add_seconds";
import * as Set_iso_day from "date-fns/set_iso_day";
import * as Set_minutes from "date-fns/set_minutes";
import * as Set_quarter from "date-fns/set_quarter";
import * as Set_seconds from "date-fns/set_seconds";
import * as Sub_minutes from "date-fns/sub_minutes";
import * as Sub_seconds from "date-fns/sub_seconds";
import * as Add_quarters from "date-fns/add_quarters";
import * as Set_iso_week from "date-fns/set_iso_week";
import * as Set_iso_year from "date-fns/set_iso_year";
import * as Sub_quarters from "date-fns/sub_quarters";
import * as Add_iso_years from "date-fns/add_iso_years";
import * as Sub_iso_years from "date-fns/sub_iso_years";
import * as Is_within_range from "date-fns/is_within_range";
import * as Set_day_of_year from "date-fns/set_day_of_year";
import * as Add_milliseconds from "date-fns/add_milliseconds";
import * as Closest_index_to from "date-fns/closest_index_to";
import * as Set_milliseconds from "date-fns/set_milliseconds";
import * as Sub_milliseconds from "date-fns/sub_milliseconds";
import * as Distance_in_words from "date-fns/distance_in_words";
import * as Distance_in_words_strict from "date-fns/distance_in_words_strict";
import * as Distance_in_words_to_now from "date-fns/distance_in_words_to_now";

function flip(f, a, b) {
  return Curry._2(f, b, a);
}

function handleOptBool(optBool) {
  return Js_null_undefined.from_opt(Js_option.map((function (bool) {
                    if (bool !== 0) {
                      return true;
                    } else {
                      return false;
                    }
                  }), optBool));
}

function timeUnitToString(param) {
  switch (param) {
    case 0 : 
        return "s";
    case 1 : 
        return "m";
    case 2 : 
        return "h";
    case 3 : 
        return "d";
    case 4 : 
        return "M";
    case 5 : 
        return "Y";
    
  }
}

function partialMethodToString(param) {
  switch (param) {
    case 0 : 
        return "floor";
    case 1 : 
        return "ceil";
    case 2 : 
        return "round";
    
  }
}

function closestIndexTo(param, param$1) {
  return Closest_index_to(param$1, param);
}

function closestTo(param, param$1) {
  return Closest_to(param$1, param);
}

function distanceInWords(includeSeconds, addSuffix, dateToCompare, date) {
  return Distance_in_words(dateToCompare, date, {
              includeSeconds: handleOptBool(includeSeconds),
              addSuffix: handleOptBool(addSuffix)
            });
}

function distanceInWordsStrict(addSuffix, unit, partialMethod, dateToCompare, date) {
  return Distance_in_words_strict(dateToCompare, date, {
              addSuffix: handleOptBool(addSuffix),
              unit: Js_null_undefined.from_opt(Js_option.map(timeUnitToString, unit)),
              partialMethod: Js_null_undefined.from_opt(Js_option.map(partialMethodToString, partialMethod))
            });
}

function distanceInWordsToNow(includeSeconds, addSuffix, date) {
  return Distance_in_words_to_now(date, {
              includeSeconds: handleOptBool(includeSeconds),
              addSuffix: handleOptBool(addSuffix)
            });
}

function format(param, param$1) {
  return Format(param$1, param);
}

function isAfter(param, param$1) {
  return +Is_after(param$1, param);
}

function isBefore(param, param$1) {
  return +Is_before(param$1, param);
}

function $$parseFloat(additionalDigits, $$float) {
  return Parse($$float, {
              additionalDigits: Js_null_undefined.from_opt(additionalDigits)
            });
}

function parseString(additionalDigits, string) {
  return Parse(string, {
              additionalDigits: Js_null_undefined.from_opt(additionalDigits)
            });
}

function isWithinRange(startDate, endDate, date) {
  return +Is_within_range(date, startDate, endDate);
}

function setMilliseconds(param, param$1) {
  return Set_milliseconds(param$1, param);
}

function setSeconds(param, param$1) {
  return Set_seconds(param$1, param);
}

function setMinutes(param, param$1) {
  return Set_minutes(param$1, param);
}

function setHours(param, param$1) {
  return Set_hours(param$1, param);
}

function setDay(param, param$1) {
  return Set_day(param$1, param);
}

function setISODay(param, param$1) {
  return Set_iso_day(param$1, param);
}

function setDate(param, param$1) {
  return Set_date(param$1, param);
}

function setDayOfYear(param, param$1) {
  return Set_day_of_year(param$1, param);
}

function setISOWeek(param, param$1) {
  return Set_iso_week(param$1, param);
}

function setMonth(param, param$1) {
  return Set_month(param$1, param);
}

function setQuarter(param, param$1) {
  return Set_quarter(param$1, param);
}

function setYear(param, param$1) {
  return Set_year(param$1, param);
}

function setISOYear(param, param$1) {
  return Set_iso_year(param$1, param);
}

function subMilliseconds(param, param$1) {
  return Sub_milliseconds(param$1, param);
}

function subSeconds(param, param$1) {
  return Sub_seconds(param$1, param);
}

function subMinutes(param, param$1) {
  return Sub_minutes(param$1, param);
}

function subHours(param, param$1) {
  return Sub_hours(param$1, param);
}

function subDays(param, param$1) {
  return Sub_days(param$1, param);
}

function subWeeks(param, param$1) {
  return Sub_weeks(param$1, param);
}

function subMonths(param, param$1) {
  return Sub_months(param$1, param);
}

function subQuarters(param, param$1) {
  return Sub_quarters(param$1, param);
}

function subYears(param, param$1) {
  return Sub_years(param$1, param);
}

function subISOYears(param, param$1) {
  return Sub_iso_years(param$1, param);
}

function addMilliseconds(param, param$1) {
  return Add_milliseconds(param$1, param);
}

function addSeconds(param, param$1) {
  return Add_seconds(param$1, param);
}

function addMinutes(param, param$1) {
  return Add_minutes(param$1, param);
}

function addHours(param, param$1) {
  return Add_hours(param$1, param);
}

function addDays(param, param$1) {
  return Add_days(param$1, param);
}

function addWeeks(param, param$1) {
  return Add_weeks(param$1, param);
}

function addMonths(param, param$1) {
  return Add_months(param$1, param);
}

function addQuarters(param, param$1) {
  return Add_quarters(param$1, param);
}

function addYears(param, param$1) {
  return Add_years(param$1, param);
}

function addISOYears(param, param$1) {
  return Add_iso_years(param$1, param);
}

export {
  flip ,
  handleOptBool ,
  timeUnitToString ,
  partialMethodToString ,
  closestIndexTo ,
  closestTo ,
  distanceInWords ,
  distanceInWordsStrict ,
  distanceInWordsToNow ,
  format ,
  isAfter ,
  isBefore ,
  $$parseFloat ,
  parseString ,
  isWithinRange ,
  setMilliseconds ,
  setSeconds ,
  setMinutes ,
  setHours ,
  setDay ,
  setISODay ,
  setDate ,
  setDayOfYear ,
  setISOWeek ,
  setMonth ,
  setQuarter ,
  setYear ,
  setISOYear ,
  subMilliseconds ,
  subSeconds ,
  subMinutes ,
  subHours ,
  subDays ,
  subWeeks ,
  subMonths ,
  subQuarters ,
  subYears ,
  subISOYears ,
  addMilliseconds ,
  addSeconds ,
  addMinutes ,
  addHours ,
  addDays ,
  addWeeks ,
  addMonths ,
  addQuarters ,
  addYears ,
  addISOYears ,
  
}
/* date-fns/parse Not a pure module */
