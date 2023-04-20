// @generated by protoc-gen-es v1.2.0 with parameter "target=ts,import_extension=.ts"
// @generated from file protos/base.proto (package protoc, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Payload } from "./payload_pb.ts";

/**
 * @generated from message protoc.Base
 */
export class Base extends Message<Base> {
  /**
   * @generated from field: int32 version = 1;
   */
  version = 0;

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: protoc.Payload data = 3;
   */
  data?: Payload;

  /**
   * @generated from oneof protoc.Base.Content
   */
  Content: {
    /**
     * @generated from field: int32 hotVersion = 4;
     */
    value: number;
    case: "hotVersion";
  } | {
    /**
     * @generated from field: int32 coldVersion = 5;
     */
    value: number;
    case: "coldVersion";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: string deviceType = 6;
   */
  deviceType = "";

  constructor(data?: PartialMessage<Base>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protoc.Base";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "data", kind: "message", T: Payload },
    { no: 4, name: "hotVersion", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "Content" },
    { no: 5, name: "coldVersion", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "Content" },
    { no: 6, name: "deviceType", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Base {
    return new Base().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Base {
    return new Base().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Base {
    return new Base().fromJsonString(jsonString, options);
  }

  static equals(a: Base | PlainMessage<Base> | undefined, b: Base | PlainMessage<Base> | undefined): boolean {
    return proto3.util.equals(Base, a, b);
  }
}

