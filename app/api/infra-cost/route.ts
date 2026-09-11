import { BigQuery } from "@google-cloud/bigquery";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const bigquery = new BigQuery({
  projectId: process.env.GCP_BILLING_PROJECT,
});

export async function GET() {
  try {
    const billingProject = process.env.GCP_BILLING_PROJECT;
    const billingDataset = process.env.GCP_BILLING_DATASET;
    const billingTable = process.env.GCP_BILLING_TABLE;
    const targetProject = process.env.GCP_PROJECT_ID;

    if (
      !billingProject ||
      !billingDataset ||
      !billingTable ||
      !targetProject
    ) {
      return NextResponse.json(
        { error: "Billing configuration is incomplete." },
        { status: 500 }
      );
    }

    const query = `
      SELECT
        COALESCE(
          SUM(cost) +
          SUM(
            IFNULL(
              (
                SELECT SUM(credit.amount)
                FROM UNNEST(credits) AS credit
              ),
              0
            )
          ),
          0
        ) AS total_cost
      FROM \`${billingProject}.${billingDataset}.${billingTable}\`
      WHERE project.id = @projectId
        AND usage_start_time >= TIMESTAMP_TRUNC(
          CURRENT_TIMESTAMP(),
          MONTH
        )
    `;

    const [rows] = await bigquery.query({
      query,
      params: {
        projectId: targetProject,
      },
    });

    const cost = Number(rows[0]?.total_cost ?? 0);

    return NextResponse.json({
      cost: Number(cost.toFixed(2)),
    });
  } catch (error) {
    console.error("Unable to retrieve infrastructure cost:", error);

    return NextResponse.json(
      { error: "Unable to retrieve infrastructure cost." },
      { status: 500 }
    );
  }
}