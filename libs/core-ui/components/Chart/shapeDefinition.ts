/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

// Ref: https://github.com/liihuu/KLineChartSample/blob/master/react-sample/src/chart/DrawShapeKLineChart.jsx

import { checkCoordinateOnSegment } from 'klinecharts/lib/shape/shapeHelper';

export const rect = {
    name: 'rect',
    totalStep: 3,
    checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }: { dataSource: any, eventCoordinate: any }) => {
        return checkCoordinateOnSegment(dataSource[0], dataSource[1], eventCoordinate)
    },
    createShapeDataSource: ({ coordinates }: { coordinates: any }) => {
        if (coordinates.length === 2) {
            return [
                {
                    type: 'line',
                    isDraw: false,
                    isCheck: true,
                    dataSource: [
                        [{ ...coordinates[0] }, { x: coordinates[1].x, y: coordinates[0].y }],
                        [{ x: coordinates[1].x, y: coordinates[0].y }, { ...coordinates[1] }],
                        [{ ...coordinates[1] }, { x: coordinates[0].x, y: coordinates[1].y }],
                        [{ x: coordinates[0].x, y: coordinates[1].y }, { ...coordinates[0] }]
                    ]
                },
                {
                    type: 'polygon',
                    isDraw: true,
                    isCheck: false,
                    styles: { style: 'fill' },
                    dataSource: [[
                        { ...coordinates[0] },
                        { x: coordinates[1].x, y: coordinates[0].y },
                        { ...coordinates[1] },
                        { x: coordinates[0].x, y: coordinates[1].y }
                    ]]
                },
                {
                    type: 'polygon',
                    isDraw: true,
                    isCheck: false,
                    dataSource: [[
                        { ...coordinates[0] },
                        { x: coordinates[1].x, y: coordinates[0].y },
                        { ...coordinates[1] },
                        { x: coordinates[0].x, y: coordinates[1].y }
                    ]]
                }
            ]
        }
        return []
    }
}

export const circle = {
    name: 'circle',
    totalStep: 3,
    checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }: { dataSource: any, eventCoordinate: any }) => {
        const xDis = Math.abs(dataSource.x - eventCoordinate.x)
        const yDis = Math.abs(dataSource.y - eventCoordinate.y)
        const r = Math.sqrt(xDis * xDis + yDis * yDis)
        return Math.abs(r - dataSource.radius) < 3
    },
    createShapeDataSource: ({ coordinates }: { coordinates: any }) => {
        if (coordinates.length === 2) {
            const xDis = Math.abs(coordinates[0].x - coordinates[1].x)
            const yDis = Math.abs(coordinates[0].y - coordinates[1].y)
            const radius = Math.sqrt(xDis * xDis + yDis * yDis)
            return [
                {
                    type: 'arc',
                    isDraw: true,
                    isCheck: false,
                    styles: { style: 'fill' },
                    dataSource: [
                        { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
                    ]
                },
                {
                    type: 'arc',
                    isDraw: true,
                    isCheck: true,
                    dataSource: [
                        { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
                    ]
                }
            ]
        }
        return []
    }
}