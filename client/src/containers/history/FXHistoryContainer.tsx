import React from "react"

import { HistoryWrapper } from "@/common/StyledComponents"

import { AppQuery } from "../../common/AppQuery"
import { IApolloContainerProps } from "../../common/IApolloContainerProps"
import { FXHistoryChart } from "./components/FXHistoryChart"
import ABMHistoryConnection from "./graphql/ABMHistoryConnection.graphql"
import {
  ABMHistoryQuery,
  ABMHistoryQueryVariables,
} from "./graphql/types/ABMHistoryQuery"

const FXHistory: React.FC<IApolloContainerProps> = ({ id = "" }) => (
  <>
    <AppQuery<ABMHistoryQuery, ABMHistoryQueryVariables>
      query={ABMHistoryConnection}
      variables={{ id }}
    >
      {(data: ABMHistoryQuery) => (
        <FXHistoryChart getPriceHistory={data.getPriceHistory} />
      )}
    </AppQuery>
  </>
)

const FXHistoryContainer: React.FC<IApolloContainerProps> = ({ id }) => (
  <HistoryWrapper>
    <FXHistory id={id} />
  </HistoryWrapper>
)

export default FXHistoryContainer
