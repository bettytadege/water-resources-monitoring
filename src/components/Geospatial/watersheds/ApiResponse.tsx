import CardContainer from "@/components/common/CardContainer"

const apiResponse={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "ws_001",
      "properties": {
        "name": "Blue Nile Watershed",
        "area": 176000,
        "waterBodies": [
          "Lake Tana",
          "Blue Nile River"
        ],
        "averageRainfall": 1200,
        "population": 18500000,
        "lastUpdated": "2024-01-15T10:30:00Z"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              37,
              11
            ],
            [
              39,
              11
            ],
            [
              39,
              13
            ],
            [
              37,
              13
            ],
            [
              37,
              11
            ]
          ]
        ]
      }
    }
  ]
}

function ApiResponse() {
  return (
   <CardContainer>
  <div>
    <p className="text-deep-teal font-semibold">API Response</p>
    <span className="text-sm text-slate-purple">Latest API response data</span>
  </div>

  <div className="bg-[#F1F5F9] h-[400px] rounded-md overflow-x-hidden overflow-y-auto custom-scrollbar text-sm p-4 text-slate-purple">
    <pre className="whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
  </div>
</CardContainer>

  )
}

export default ApiResponse