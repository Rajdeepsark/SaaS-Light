// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: agMyu4PeSGCfJSos2L8upP
// Component: EaqLQScuTmnI
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: agMyu4PeSGCfJSos2L8upP/projectcss
import sty from "./PlasmicTeams.module.css"; // plasmic-import: EaqLQScuTmnI/css
import teampngNOr3GVaPtJz from "./images/teampng.png"; // plasmic-import: nOR3g-VAPtJZ/picture

createPlasmicElementProxy;

export const PlasmicTeams__VariantProps = new Array();

export const PlasmicTeams__ArgProps = new Array();

const $$ = {};

function PlasmicTeams__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"64px"}
          displayMaxWidth={"64px"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: teampngNOr3GVaPtJz,
            fullWidth: 128,
            fullHeight: 128,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___0T71W
          )}
        >
          {"Jocylne Kujo"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__nO9Gd
          )}
        >
          {"Founder Flappin"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__w138A
          )}
        >
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
          }
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTeams__ArgProps,
          internalVariantPropNames: PlasmicTeams__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeams__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeams";
  } else {
    func.displayName = `PlasmicTeams.${nodeName}`;
  }
  return func;
}

export const PlasmicTeams = Object.assign(
  // Top-level PlasmicTeams renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicTeams
    internalVariantProps: PlasmicTeams__VariantProps,
    internalArgProps: PlasmicTeams__ArgProps
  }
);

export default PlasmicTeams;
/* prettier-ignore-end */
