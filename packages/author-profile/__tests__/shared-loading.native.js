import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimalNativeTransform,
  print
} from "@times-components/jest-serializer";
import shared from "./shared-loading.base";

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(print, minimalNativeTransform)
  );

  shared();
};
