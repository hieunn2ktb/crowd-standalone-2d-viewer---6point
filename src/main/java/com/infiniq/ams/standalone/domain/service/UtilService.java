package com.infiniq.ams.standalone.domain.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.concurrent.ThreadLocalRandom;

@Slf4j
@Service
@RequiredArgsConstructor
public class UtilService {

    private static final String[] COLOR_POOL = {
            "#FF5733", "#33FF57", "#3357FF", "#F0A500", "#6A1B9A", "#00838F", "#C62828", "#2E7D32"
    };

    public String getClassName(int outerType, int innerType) {
        if (outerType == 1) { // VRU
            return switch (innerType) {
                case 0 -> "pedestrian";
                case 1 -> "Rider";
                default -> "Unknown_VRU";
            };
        } else if (outerType == 2) { // vehicle
            return switch (innerType) {
                case 0 -> "Sedan";
                case 1 -> "Suv";
                case 2 -> "Bus";
                case 3 -> "Truck";
                case 4 -> "Trailer";
                case 5 -> "Heavy_equipment";
                case 6 -> "othersVehicle";
                default -> "Unknown_vehicle";
            };
        } else if (outerType == 3) { // two_wheeler
            return switch (innerType) {
                case 0 -> "bicycle";
                case 1 -> "Motorcycle";
                case 2 -> "personalMobility";
                case 3 -> "OthersTwo_Wheeler";
                default -> "Unknown_two_wheeler";
            };
        } else {
            return "Unknown_type";
        }
    }

    public String getClassColorByClassName(String className) {
        if (className == null || className.isEmpty()) {
            return "";
        }
        if (className.equalsIgnoreCase("Sedan")) {
            return "#f6a500";
        } else if (className.equalsIgnoreCase("Truck")) {
            return "#e5fc00";
        } else if (className.equalsIgnoreCase("Bus")) {
            return "#f42ade";
        } else if (className.equalsIgnoreCase("Trailer")) {
            return "#986f03";
        } else if (className.equalsIgnoreCase("Heavy_equipment")) {
            return "#bdeba0";
        } else if (className.equalsIgnoreCase("othersVehicle")) {
            return "#01a573";
        } else if (className.equalsIgnoreCase("Pedestrian")) {
            return "#02e5c7";
        } else if (className.equalsIgnoreCase("Rider")) {
            return "#00a6ab";
        } else if (className.equalsIgnoreCase("personaMobility")) {
            return "#1172ff";
        } else if (className.equalsIgnoreCase("Motorcycle")) {
            return "#25668c";
        } else if (className.equalsIgnoreCase("OtherTwo_Wheeler")) {
            return "#d7bffb";
        } else if (className.equalsIgnoreCase("Suv")) {
            return "#6d4dbc";
        } else if (className.equalsIgnoreCase("Bicycle")) {
            return "#58fd63";
        }
        return getRandomHexColor(); // Return random string for unknown classes
    }

    public String getTagColorByTagNameAndTagValue(String tagName, String tagValue) {
        if (tagName == null || tagValue == null) {
            return "";
        }
        if (tagName.equalsIgnoreCase("Occlusion")) {
            switch (tagValue) {
                case "1":
                    return "#fb8b87";
                case "2":
                    return "#f6b50f";
                case "3":
                    return "#f8cf9b";
                default:
                    return "";
            }
        } else if (tagName.equalsIgnoreCase("Truncation")) {
            switch (tagValue) {
                case "1":
                    return "#ff00e0";
                case "2":
                    return "#f40403";
                case "3":
                    return "#1bed00";
                default:
                    return "";
            }
        }

        return ""; // Return empty string if tagName doesn't match expected values
    }

    //helper method to generate a random hex color
    public static String getRandomHexColor() {
        int idx = ThreadLocalRandom.current().nextInt(COLOR_POOL.length);
        return COLOR_POOL[idx];
    }
}
