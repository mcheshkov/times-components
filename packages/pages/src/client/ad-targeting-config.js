export default (platformAdConfig, articleAdConfig) => ({
  networkId: platformAdConfig.networkId,
  adUnit: platformAdConfig.adUnit,
  pageTargeting: {
    Timeline: "0",
    edition: "tnl-english",
    Shared: "0",
    testmode: platformAdConfig.testMode,
    sec_id: platformAdConfig.sectionId,
    cont_type: "art",
    av: platformAdConfig.appVersion,
    kw: articleAdConfig.headline.toLowerCase().replace(/\s+/g, ","),
    st: "Member",
    aid: articleAdConfig.id,
    cos: platformAdConfig.operatingSystem,
    cov: platformAdConfig.operatingSystemVersion,
    cpn: platformAdConfig.cookieEid,
    did: platformAdConfig.deviceId,
    eid: platformAdConfig.cookieEid,
    env: platformAdConfig.environment,
    log: platformAdConfig.isLoggedIn ? "1" : "0",
    pid: platformAdConfig.cookieEid,
    vid: "",
    cips: platformAdConfig.cookieAcsTnl,
    "did#": platformAdConfig.deviceIdHash,
    path: platformAdConfig.sectionName,
    pform: platformAdConfig.platform,
    share_token: "",
    Timeline_Id: platformAdConfig.sectionName,
    iam_tgt: platformAdConfig.cookieIamTgt,
    section: platformAdConfig.sectionName,
    excl_cat: ""
  },
  slotTargeting: {
    path: "/news",
    section: "news",
    sec_id: "null",
    slot: "news",
    zone: "current_edition"
  },
  bidderSlots: [],
  biddersConfig: {}
});
