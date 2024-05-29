// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: agMyu4PeSGCfJSos2L8upP
// Component: VjZqRab8fRCe
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: agMyu4PeSGCfJSos2L8upP/projectcss
import sty from "./PlasmicSection.module.css"; // plasmic-import: VjZqRab8fRCe/css

createPlasmicElementProxy;

export const PlasmicSection__VariantProps = new Array("background", "size");

export const PlasmicSection__ArgProps = new Array("children");

const $$ = {};

function PlasmicSection__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "background",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.background
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
        sty.root,
        {
          [sty.rootbackground_blue]: hasVariant($state, "background", "blue"),
          [sty.rootbackground_darkBlue]: hasVariant(
            $state,
            "background",
            "darkBlue"
          ),
          [sty.rootbackground_dark]: hasVariant($state, "background", "dark"),
          [sty.rootbackground_gray]: hasVariant($state, "background", "gray"),
          [sty.rootsize_dashboardSection]: hasVariant(
            $state,
            "size",
            "dashboardSection"
          ),
          [sty.rootsize_faq]: hasVariant($state, "size", "faq"),
          [sty.rootsize_fullContentGallery]: hasVariant(
            $state,
            "size",
            "fullContentGallery"
          ),
          [sty.rootsize_fullContentWidth]: hasVariant(
            $state,
            "size",
            "fullContentWidth"
          ),
          [sty.rootsize_widthContent1140Px]: hasVariant(
            $state,
            "size",
            "widthContent1140Px"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxbackground_dark]: hasVariant(
            $state,
            "background",
            "dark"
          ),
          [sty.freeBoxsize_dashboardSection]: hasVariant(
            $state,
            "size",
            "dashboardSection"
          ),
          [sty.freeBoxsize_fullContentGallery]: hasVariant(
            $state,
            "size",
            "fullContentGallery"
          ),
          [sty.freeBoxsize_fullContentWidth]: hasVariant(
            $state,
            "size",
            "fullContentWidth"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.children
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSection__ArgProps,
          internalVariantPropNames: PlasmicSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection";
  } else {
    func.displayName = `PlasmicSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps
  }
);

export default PlasmicSection;
/* prettier-ignore-end */