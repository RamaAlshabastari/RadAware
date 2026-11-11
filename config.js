/* ===== RadAware configuration =====
   ILLUSTRATIVE VALUES ONLY. Must be validated by a medical physicist
   and calibrated against dosimeter measurements before any clinical use. */
const RA_CONFIG = {
  version: "0.1-illustrative",

  /* Annual limits (planning reference).
     Source: ICRP recommendations (effective dose and lens: 20 mSv/yr averaged
     over 5 years, max 50 mSv in any single year; extremities/skin: 500 mSv/yr).
     TODO: confirm against the Saudi NRRC regulation NRRC-R-01. */
  limits: {
    effective_mSv_year: 20,
    lens_mSv_year: 20,
    extremity_mSv_year: 500,
    singleYearMax_mSv: 50
  },

  /* Alert levels as a percentage of the annual limit */
  alerts: {
    warnPercent: 80,
    criticalPercent: 100
  },

  /* Simplified scatter model (placeholders, to be calibrated) */
  model: {
    scatterFractionAt1m: 0.001,   // scatter at 1 m as a fraction of the input dose rate (order-of-magnitude placeholder)
    minDistance: 0.4,             // metres, avoids infinite values near the source
    angularBias: 0.6,             // how strongly the C-arm angle favours one side of the table
    referenceFieldCm: 25,         // field size where the field factor equals 1
    fieldExponent: 1,
    glassesFactor: 0.3,           // lens dose multiplier when wearing lead glasses (placeholder)
    kvpReference: 80,
    kvpSlope: 0.01,               // apron transmission rises slightly with kVp
    apronTransmission: {          // fraction of dose that passes through the apron (placeholders)
      "0": 1,
      "0.25": 0.10,
      "0.35": 0.06,
      "0.5": 0.04
    }
  },

  /* Heat map colour scale (unshielded scatter, microSv/h) */
  display: {
    minUSvh: 30,
    maxUSvh: 3000
  },

  /* Position suggestion rules */
  suggest: {
    maxDistance: 2.8,     // metres from the table centre
    minSeparation: 0.8    // metres between two people
  }
};
