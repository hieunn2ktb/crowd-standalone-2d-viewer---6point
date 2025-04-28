/**
 * ## AISTUDIO_CHART
 * @version 1.0
 * @todo - 소스정리 및 기능추가
 */
class AistudioChart {
    constructor(chartId) {
        const conditions = [null, undefined, ''];
        if (conditions.includes(chartId)) {
            console.log('chartId는 필수항목 입니다.');
        } else {
            this.chartId = chartId;
        }

        this.init = function(initData, initOptions) {
            this.initData = initData;
            this.initOptions = initOptions;

            return this.draw(initData, initOptions);
        }

        this.draw = function(newData, chartOptions) {
            let data;
            let options;

            if (this.initData) {
                data = this.initData;
                options = this.initOptions;
            } else {
                this.data = newData;
                this.options = chartOptions;

                data = this.data;
                options = this.options;
            }

            if (conditions.includes(data)) {
                data = {};
            }
            if (conditions.includes(options)) {
                options = {};
                console.log('옵션이 설정되지 않았습니다.');
            }

            function checkOptions(options) {
                if (options.axis) {
                    if (!options.axis.setX) {
                        options.axis.setX = {
                            minGridDistance : 0,
                            minZoomCount : 1,
                            maxDeviation : 0,
                            baseInterval : {
                                timeUnit : 'day'
                            }
                        };
                    } else {
                        options.axis.setX.minGridDistance = options.axis.setX.minGridDistance === undefined ? 0 : options.axis.setX.minGridDistance;
                        options.axis.setX.minZoomCount = options.axis.setX.minZoomCount === undefined ? 1 : options.axis.setX.minZoomCount;
                        options.axis.setX.maxDeviation = options.axis.setX.maxDeviation === undefined ? 0 : options.axis.setX.maxDeviation;
                        options.axis.setX.baseInterval = options.axis.setX.baseInterval === undefined ? {timeUnit : 'day'} : options.axis.setX.baseInterval;
                    }
                }
                options.option.tooltip = options.option.tooltip === undefined ? {text : ''} : options.option.tooltip;
                options.option.language = options.option.language === undefined ? 'ko' : options.option.language;

                return options;
            }
            checkOptions(options);

            am5.addLicense("AM5C410805834");

            if (options.axis) {
                if (options.axis.x === 'date') {
                    return AistudioChart.fn.render.date(data, options, this.chartId);
                } else if (options.axis.x === 'category') {
                    return AistudioChart.fn.render.category(data, options, this.chartId);
                } else if (options.axis.x === 'gaplessDate') {
                    return AistudioChart.fn.render.gaplessDate(data, options, chartId);
                }
            } else {
                return AistudioChart.fn.render.pieChart(data, options, this.chartId);
            }
        }
    }
    createRoot(options, chartId) {
        am5.array.each(am5.registry.rootElements, () => {
            for (let rootData of am5.registry.rootElements) {
                if (rootData.dom.id === chartId) {
                    rootData.dispose();
                }
            }
        });

        const root = am5.Root.new(chartId);
        const theme = am5.Theme.new(root);

        // options에 locale설정이있다면
        if (options.option.locale === 'KR') {
            root.locale = am5locales_ko_KR;  // 언어 한글로설정
        }

        if (options.option.label) {
            theme.rule("Label").setAll({
                fill: am5.color('#f1f1f1'),
                fontSize: `${options.option.label.fontSize}px`
            });
        }

        // 옵션값으로 차트의 색상 설정
        if (options.option.colors) {
            const colorArray = createColorArray(options.option.colors);

            function createColorArray(colors) {
                return colors.map(color => am5.color(color));
            };

            theme.rule("ColorSet").set("colors", colorArray);
        }

        // 커스텀옵션 추가하는곳
        if (options.customOption) {
            if (options.customOption.bytePrefixes) {
                root.numberFormatter.setAll({
                    numberFormat: "#.0b",
                    smallNumberThreshold: 0.001,
                    bytePrefixes : [
                        { "number": 1024, "suffix": "KB" },
                        { "number": 1048576, "suffix": "MB" },
                        { "number": 1073741824, "suffix": "GB" }
                    ]
                });
            }
        }

        // 테마설정
        root.setThemes([
            am5themes_Animated.new(root),
            theme
        ]);

        return root;
    }
    createChart(root, options) {
        if (options.axis) {
            // 차트설정
            const chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                        panX: true,
                        panY: false,
                        wheelX: "panX",
                        wheelY: "zoomX",
                        pinchZoomX: true,
                        // paddingTop: 48,              // 차트의 padding 설정
                        maxTooltipDistance: 0,          // 툴팁 하나만 띄우기
                        layout: root.verticalLayout,    // 수직레이아웃
                    }
                ));

            // 커서설정
            const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "none"
            }));
            cursor.lineX.set("visible", false);
            cursor.lineY.set("visible", false);
            chart.zoomOutButton.set("forceHidden", true);   // 줌버튼 숨김처리
            return chart;
        } else {
            const chart = root.container.children.push(
                am5percent.PieChart.new(root, {
                    layout: root.verticalLayout,
                    innerRadius: am5.percent(options.option.pieChart.innerRadius)
                })
            );

            return chart;
        }
    }
    bullets(root, series, options) {
        let bullet = series.bullets.push(function() {
            let shape = AistudioChart.prototype.bulletShape(root, series, options);

            return am5.Bullet.new(root, {
                sprite: shape
            });
        });

        return bullet;
    }
    bulletShape(root, series, options) {
        if (options.option.bullets.shape === 'circle') {
            let circle = am5.Circle.new(root, {
                radius: options.option.bullets.circleSize,
                fill: series.get("fill"),
                stroke: root.interfaceColors.get("background"),
                strokeWidth: options.option.bullets.strokeWidth
            });

            return circle;
        } else if (options.option.bullets.shape === 'rectangle') {
            let rectangle = am5.Rectangle.new(root, {
                width: options.option.bullets.rectanglesize,
                height: options.option.bullets.rectanglesize,
                centerX:am5.p50,
                centerY:am5.p50,
                fill: series.get("stroke")
            });
            return rectangle;
        }
    }

    getData() {
        console.log(this.data)

        return this.data;
    }

    callback(fn) {

    }
}

AistudioChart.fn = {
    render : {
        pieChart : function(data, options, chartId) {
            const root = AistudioChart.prototype.createRoot(options, chartId);
            const chart = AistudioChart.prototype.createChart(root, options);

            let legend = chart.children.push(
                am5.Legend.new(root, {
                    centerX: am5.percent(50),
                    x: am5.percent(50),
                    marginBottom: 15,
                })
            );

            let series = chart.series.push(
                am5percent.PieSeries.new(root, {
                    name: "Series",
                    valueField: "value",
                    categoryField: "category",
                    tooltip: am5.Tooltip.new(root, {
                        // labelText: `${tooltipText}\n[bold]{category}[/] : {value} ({valuePercentTotal.formatNumber('0.00')}%)`,
                        labelText: options.option.tooltip.text,
                    })
                })
            );

            series.slices.template.events.on("click", (ev) => {
                series.slices.each(function(slice) {
                    if (slice != ev.target && slice.get("active")) {
                        slice.set("active", false);
                    }
                });

                const category = ev.target.dataItem.dataContext.category;
                const value = ev.target.dataItem.dataContext.value;

                // console.log(ev.target);
                console.log(category, value);

                // 콜백형태로 함수를 받아서 실행하도록
                const handleClick = AistudioChart.prototype.callback(options.option.methods.hello(category, value));
            });

            if (options.option.pieChart.sliceGap === true) {
                series.slices.template.setAll({
                    stroke: am5.color('#ffffff'),
                    strokeWidth: 4
                });
            }
            series.data.setAll(data);

            // series.slices.template.set("toggleKey", "none");
            series.labels.template.set("visible", false);
            series.ticks.template.set("visible", false);
            series.labels.template.set("forceHidden", true);

            legend.data.setAll(series.dataItems);

            series.appear(options.option.appear.duration, options.option.appear.delay);
            chart.appear(options.option.appear.duration, options.option.appear.delay);
        },
        date : function(data, options, chartId) {
            const root = AistudioChart.prototype.createRoot(options, chartId);
            const chart = AistudioChart.prototype.createChart(root, options);

            // X축설정
            let xAxis = chart.xAxes.push(
                am5xy.DateAxis.new(root, {
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: options.axis.setX.minGridDistance
                    }),
                    minZoomCount: options.axis.setX.minZoomCount,
                    maxDeviation: options.axis.setX.maxDeviation,
                    baseInterval: {
                        timeUnit: options.axis.setX.baseInterval.timeUnit,
                        count: 1
                    },
                })
            );

            // 일별차트 언어셋 및 날짜포맷팅
            if (options.option.language === 'ko') {
                if (options.axis.setX.baseInterval.timeUnit === 'day') {
                    xAxis.get("dateFormats")["day"] = "d'일'";
                    xAxis.get("periodChangeDateFormats")["day"] = "d'일'";
                } else if (options.axis.setX.baseInterval.timeUnit === 'month') {
                    xAxis.get("dateFormats")["month"] = "M'월'";
                    xAxis.get("periodChangeDateFormats")["month"] = "M'월'";
                }
            } else if (options.option.language === 'en') {
                if (options.axis.setX.baseInterval.timeUnit === 'day') {
                    xAxis.get("dateFormats")["day"] = "dt";
                    xAxis.get("periodChangeDateFormats")["day"] = "dt";
                } else if (options.axis.setX.baseInterval.timeUnit === 'month') {
                    xAxis.get("dateFormats")["month"] = "MMM";
                    xAxis.get("periodChangeDateFormats")["month"] = "MMM";
                }
            } else if (options.option.language === 'vi') {
                if (options.axis.setX.baseInterval.timeUnit === 'day') {
                    xAxis.get("dateFormats")["day"] = "d'ngày'";
                    xAxis.get("periodChangeDateFormats")["day"] = "d'ngày'";
                } else if (options.axis.setX.baseInterval.timeUnit === 'month') {
                    xAxis.get("dateFormats")["month"] = "M'tháng'";
                    xAxis.get("periodChangeDateFormats")["month"] = "M'tháng'";
                }
            }

            // Y축설정
            let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                min: 0,
                extraMax: 0.1,
                renderer: am5xy.AxisRendererY.new(root, {})
            }));

            // title을 넣을 header영역 (안씀)
            // yAxis.axisHeader.children.push(am5.Label.new(root, {
            //     text: options.title,
            //     fontSize: "18px",
            //     fontWeight: "600",
            //     centerX: am5.p50,
            //     x: am5.p50,
            //     centerY: am5.p0,
            //     y: am5.p0,
            // }));

            let legend = chart.children.push(
                am5.Legend.new(root, {
                    x: am5.p50,
                    centerX: am5.p50,
                    y: am5.p100,
                    centerY: am5.p100,
                    // paddingTop: 0,
                    // layout: am5.GridLayout.new(root, {
                    //     maxColumns: 4    // 그리드의 최대 열 수
                    // }),
                })
            );

            function makeLineSeries(valueName, tooltipText) {
                let series = chart.series.push(am5xy.LineSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: valueName,
                    valueXField: "date",
                    tooltip:am5.Tooltip.new(root, {
                        // labelText: `${tooltipText}\n${valueName} : {valueY}`
                        labelText: options.option.tooltip.text
                    }),
                    legendLabelText : `${valueName}`
                }));
                series.strokes.template.setAll({
                    strokeWidth: 2
                });

                series.data.setAll(data);
                if (options.option.bullets) {
                    bullet = AistudioChart.prototype.bullets(root, series, options);
                }
                legend.data.push(series);

                series.appear();
            }

            function makeColumnSeries(valueName, tooltipText) {
                let series = chart.series.push(am5xy.ColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: valueName,
                    valueXField: "date",
                    tooltip:am5.Tooltip.new(root, {
                        // labelText: `${tooltipText}\n${valueName} : {valueY}`
                        labelText: options.option.tooltip.text
                    }),
                    legendLabelText : `${valueName}`
                }));

                series.columns.template.setAll({
                    width: am5.percent(50),
                    tooltipY: 0,
                    strokeOpacity: 0,
                });

                series.data.setAll(data);
                legend.data.push(series);

                series.appear();
            }

            let tooltipText;
            if (options.option.tooltip) {
                tooltipText = options.option.tooltip.text;
            }

            for (let [key, value] of Object.entries(options.axis.y)) {
                let valueName = key;

                if (value === 'line') {
                    makeLineSeries(valueName, tooltipText);
                } else if (value === 'column') {
                    makeColumnSeries(valueName, tooltipText)
                }
            }

            chart.appear(1000, 100);
        },
        category : function(data, options, chartId) {
            const root = AistudioChart.prototype.createRoot(options, chartId);
            const chart = AistudioChart.prototype.createChart(root, options);

            // X축
            let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                categoryField: "category",
                renderer: am5xy.AxisRendererX.new(root, {
                    cellStartLocation: 0.1, // X축 value영역 좌측여백
                    cellEndLocation: 0.9    // X축 value영역 우측여백
                })
            }));
            xAxis.data.setAll(data);

            // Y축 설정
            let yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    // min: options.option.value.min,  // value의 최소값
                    // max: options.option.value.max,  // value의 최대값
                    // strictMinMax : true,            // 데이터값 기반 최대 최소값설정
                    renderer: am5xy.AxisRendererY.new(root, {
                        strokeOpacity: 0.1
                    })
                })
            );

            // legend 설정
            let legend = chart.children.push(
                am5.Legend.new(root, {
                    centerX: am5.p50,
                    x: am5.p50
                })
            );

            // Serise 생성
            function makeSeries(name, fieldName, tooltipText) {
                let series = chart.series.push(am5xy.ColumnSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: fieldName,
                    categoryXField: "category"
                }));

                series.columns.template.setAll({
                    tooltipText: `${tooltipText}\n{name}\n{categoryX} : {valueY}`,
                    width: am5.percent(90),
                    tooltipY: 0,
                    strokeOpacity: 0
                });

                series.data.setAll(data);
                legend.data.push(series);

                series.appear();
            }

            for (let key in data) {
                let valueNum = parseInt(key)+1;
                let value = Object.keys(data[key])[valueNum];
                let tooltipText = options.option.tooltip.text[key];
                makeSeries(value, value, tooltipText);
            }

            chart.appear(1000, 100);
        },
        gaplessDate : function(data, options, chartId) {
            const root = AistudioChart.prototype.createRoot(options, chartId);
            const chart = AistudioChart.prototype.createChart(root, options);

            console.log('개발중입니다.')
        }
    },
    reRender : function(data, options, chartId) {
        am5.array.each(am5.registry.rootElements, function(root) {
            if (root.dom.id === chartId) {
                root.dispose();

                if (options.axis) {
                    if (options.axis.x === 'date') {
                        return AistudioChart.fn.render.date(data, options, chartId);
                    } else if (options.axis.x === 'category') {
                        return AistudioChart.fn.render.category(data, options, chartId);
                    } else if (options.axis.x === 'gaplessDate') {
                        return AistudioChart.fn.render.gaplessDate(data, options, chartId);
                    }
                } else {
                    return AistudioChart.fn.render.pieChart(data, options, chartId);
                }
            }
        });
    }
}

