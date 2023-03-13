import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

//css
import "../style/custom.css";
import "../style/publish_style.css";

//page
import Login from "./view/pages/common/Login";
import NotFound from "./view/pages/common/NotFound";
import Maintenance from "./view/pages/common/Maintenance";

import Layout from "./view/components/layout/Layout";

import Gis from "./view/pages/gis/Gis";

import AstInfoMngPline from "./view/pages/ast/ast/AstInfoMngPline";
import AstInfoMngFclty from "./view/pages/ast/ast/AstInfoMngFclty";
import AstStstFclty from "./view/pages/ast/ast/AstStstFclty";
import AstStstPline from "./view/pages/ast/ast/AstStstPline";

import PhyscLgtffMngFclty from "./view/pages/ast/evl/PhyscLgtffMngFclty";
import PhyscLgtffMngPline from "./view/pages/ast/evl/PhyscLgtffMngPline";
import RiskAnalRsltFclty from "./view/pages/ast/evl/RiskAnalRsltFclty";
import RiskAnalRsltPline from "./view/pages/ast/evl/RiskAnalRsltPline";
import SrviveLgtffPredFclty from "./view/pages/ast/evl/SrviveLgtffPredFclty";
import SrviveLgtffPredPline from "./view/pages/ast/evl/SrviveLgtffPredPline";
import StatEvlFclty from "./view/pages/ast/evl/StatEvlFclty";
import StatEvlPline from "./view/pages/ast/evl/StatEvlPline";

import AstCnstrucFclty from "./view/pages/ast/opr/AstCnstrucFclty";
import AstCnstrucPline from "./view/pages/ast/opr/AstCnstrucPline";
import FcltyUpdt from "./view/pages/ast/opr/FcltyUpdt";
import FltpltDgnss from "./view/pages/ast/opr/FltpltDgnss";
import MendngUpdt from "./view/pages/ast/opr/MendngUpdt";
import PlineClnsg from "./view/pages/ast/opr/PlineClnsg";
import PlineNetDgnss from "./view/pages/ast/opr/PlineNetDgnss";
import PlineRgnr from "./view/pages/ast/opr/PlineRgnr";

import Notice from "./view/pages/bbs/Notice";
import Qna from "./view/pages/bbs/Qna";
import Rescsroom from "./view/pages/bbs/Rescsroom";

import ChgPwd from "./view/pages/mpg/ChgPwd";
import WorkCstt from "./view/pages/mpg/WorkCstt";

import AstClft from "./view/pages/sys/ast/AstClft";
import AstSys from "./view/pages/sys/ast/AstSys";
import BplcMng from "./view/pages/sys/ast/BplcMng";
import CtntYyCo from "./view/pages/sys/ast/CtntYyCo";
import LayerMng from "./view/pages/sys/ast/LayerMng";
import ShpUpload from "./view/pages/sys/ast/ShpUpload";

import PlineCntrwkCt from "./view/pages/sys/evl/PlineCntrwkCt";

import AuthMng from "./view/pages/sys/sys/AuthMng";
import BatchHistMng from "./view/pages/sys/sys/BatchHistMng";
import CdMng from "./view/pages/sys/sys/CdMng";
import ErrHistMng from "./view/pages/sys/sys/ErrHistMng";
import FileIoHistMng from "./view/pages/sys/sys/FileIoHistMng";
import MnuConnHistMng from "./view/pages/sys/sys/MnuConnHistMng";
import MnuMng from "./view/pages/sys/sys/MnuMng";
import UsrLogMng from "./view/pages/sys/sys/UsrLogMng";
import UsrMng from "./view/pages/sys/sys/UsrMng";

import FileUploadSample from "./view/pages/sample/FileUploadExample";
import GridForExcel from "./view/pages/sample/GridForExcel";

/* 퍼블영역 */
import IndexPub from "../publish/IndexPub";
import Basic from "../publish/Basic";
import Basic2 from "../publish/Basic2";
import Basic3 from "../publish/Basic3";
import Basic4 from "../publish/Basic4";
import Basic5 from "../publish/Basic5";
import Basic6 from "../publish/Basic6";
import Modal from "../publish/Modal";
import Basic7 from "../publish/Basic7";
import Basic8 from "../publish/Basic8";
import Basic9 from "../publish/Basic9";
import Basic10 from "../publish/Basic10";
/* //퍼블영역 */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Gis />} />
          <Route path="/gis" element={<Gis />} />

          <Route path="/ast" element={<AstInfoMngPline />} />
          <Route path="/ast/ast/astInfoMngPline" element={<AstInfoMngPline />} />
          <Route path="/ast/ast/astInfoMgnFclty" element={<AstInfoMngFclty />} />
          <Route path="/ast/ast/astStstFclty" element={<AstStstFclty />} />
          <Route path="/ast/ast/AstStstPline" element={<AstStstPline />} />
          <Route path="/ast/evl/physcLgtffMngFclty" element={<PhyscLgtffMngFclty />} />
          <Route path="/ast/evl/physcLgtffMngPline" element={<PhyscLgtffMngPline />} />
          <Route path="/ast/evl/riskAnalRsltFclty" element={<RiskAnalRsltFclty />} />
          <Route path="/ast/evl/riskAnalRsltPline" element={<RiskAnalRsltPline />} />
          <Route path="/ast/evl/srviveLgtffPredFclty" element={<SrviveLgtffPredFclty />} />
          <Route path="/ast/evl/srviveLgtffPredPline" element={<SrviveLgtffPredPline />} />
          <Route path="/ast/evl/statEvlFclty" element={<StatEvlFclty />} />
          <Route path="/ast/evl/statEvlPline" element={<StatEvlPline />} />
          <Route path="/ast/opr/astCnstrucFclty" element={<AstCnstrucFclty />} />
          <Route path="/ast/opr/astCnstrucPline" element={<AstCnstrucPline />} />
          <Route path="/ast/opr/fcltyUpdt" element={<FcltyUpdt />} />
          <Route path="/ast/opr/fltpltDgnss" element={<FltpltDgnss />} />
          <Route path="/ast/opr/mendngUpdt" element={<MendngUpdt />} />
          <Route path="/ast/opr/plineClnsg" element={<PlineClnsg />} />
          <Route path="/ast/opr/plineNetDgnss" element={<PlineNetDgnss />} />
          <Route path="/ast/opr/plineRgnr" element={<PlineRgnr />} />

          <Route path="/sys" element={<CdMng />} />
          <Route path="/sys/sys/authMng" element={<AuthMng />} />
          <Route path="/sys/sys/batchHistMng" element={<BatchHistMng />} />
          <Route path="/sys/sys/cdMng" element={<CdMng />} />
          <Route path="/sys/sys/errHistMng" element={<ErrHistMng />} />
          <Route path="/sys/sys/fileIoHistMng" element={<FileIoHistMng />} />
          <Route path="/sys/sys/mnuConnHistMng" element={<MnuConnHistMng />} />
          <Route path="/sys/sys/mnuMng" element={<MnuMng />} />
          <Route path="/sys/sys/usrLogMng" element={<UsrLogMng />} />
          <Route path="/sys/sys/usrMng" element={<UsrMng />} />
          <Route path="/sys/ast/astClft" element={<AstClft />} />
          <Route path="/sys/ast/astSys" element={<AstSys />} />
          <Route path="/sys/ast/bplcMng" element={<BplcMng />} />
          <Route path="/sys/ast/ctntYyCo" element={<CtntYyCo />} />
          <Route path="/sys/ast/layerMng" element={<LayerMng />} />
          <Route path="/sys/ast/shpUpload" element={<ShpUpload />} />
          <Route path="/sys/evl/plineCntrwkCt" element={<PlineCntrwkCt />} />

          <Route path="/mpg" element={<WorkCstt />} />
          <Route path="/mpg/workCstt" element={<WorkCstt />} />
          <Route path="/mpg/chgPwd" element={<ChgPwd />} />

          <Route path="/bbs" element={<Notice />} />
          <Route path="/bbs/notice" element={<Notice />} />
          <Route path="/bbs/qna" element={<Qna />} />
          <Route path="/bbs/rescsroom" element={<Rescsroom />} />

          <Route path="/sample/fileUploadExample" element={<FileUploadSample />} />
          <Route path="/sample/gridForExcel" element={<GridForExcel />} />
        </Route>
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/*" element={<NotFound />} />

        {/* 퍼블영역 */}
        <Route path="/pub/basic" element={<Basic />} />
        <Route path="/pub/basic2" element={<Basic2 />} />
        <Route path="/pub/basic3" element={<Basic3 />} />
        <Route path="/pub/basic4" element={<Basic4 />} />
        <Route path="/pub/basic5" element={<Basic5 />} />
        <Route path="/pub/basic6" element={<Basic6 />} />
        <Route path="/pub/Modal" element={<Modal />} />
        <Route path="/pub/basic7" element={<Basic7 />} />
        <Route path="/pub/basic8" element={<Basic8 />} />
        <Route path="/pub/basic9" element={<Basic9 />} />
        <Route path="/pub/basic10" element={<Basic10 />} />
        <Route path="/pub/*" element={<IndexPub />} />
        {/* //퍼블영역 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
