// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/auth-client.proto

public final class AuthClient {
  private AuthClient() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface AuthRequestOrBuilder extends
      // @@protoc_insertion_point(interface_extends:AuthRequest)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>string username = 1;</code>
     * @return The username.
     */
    java.lang.String getUsername();
    /**
     * <code>string username = 1;</code>
     * @return The bytes for username.
     */
    com.google.protobuf.ByteString
        getUsernameBytes();

    /**
     * <code>uint32 protocol = 2;</code>
     * @return The protocol.
     */
    int getProtocol();

    /**
     * <pre>
     * Is set to true, if player is using mobile device
     * </pre>
     *
     * <code>bool mobile = 3;</code>
     * @return The mobile.
     */
    boolean getMobile();

    /**
     * <code>string client = 4;</code>
     * @return The client.
     */
    java.lang.String getClient();
    /**
     * <code>string client = 4;</code>
     * @return The bytes for client.
     */
    com.google.protobuf.ByteString
        getClientBytes();

    /**
     * <code>string uuid = 5;</code>
     * @return The uuid.
     */
    java.lang.String getUuid();
    /**
     * <code>string uuid = 5;</code>
     * @return The bytes for uuid.
     */
    com.google.protobuf.ByteString
        getUuidBytes();

    /**
     * <code>string secret = 6;</code>
     * @return The secret.
     */
    java.lang.String getSecret();
    /**
     * <code>string secret = 6;</code>
     * @return The bytes for secret.
     */
    com.google.protobuf.ByteString
        getSecretBytes();
  }
  /**
   * Protobuf type {@code AuthRequest}
   */
  public static final class AuthRequest extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:AuthRequest)
      AuthRequestOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use AuthRequest.newBuilder() to construct.
    private AuthRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private AuthRequest() {
      username_ = "";
      client_ = "";
      uuid_ = "";
      secret_ = "";
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new AuthRequest();
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private AuthRequest(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              java.lang.String s = input.readStringRequireUtf8();

              username_ = s;
              break;
            }
            case 16: {

              protocol_ = input.readUInt32();
              break;
            }
            case 24: {

              mobile_ = input.readBool();
              break;
            }
            case 34: {
              java.lang.String s = input.readStringRequireUtf8();

              client_ = s;
              break;
            }
            case 42: {
              java.lang.String s = input.readStringRequireUtf8();

              uuid_ = s;
              break;
            }
            case 50: {
              java.lang.String s = input.readStringRequireUtf8();

              secret_ = s;
              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return AuthClient.internal_static_AuthRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return AuthClient.internal_static_AuthRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              AuthClient.AuthRequest.class, AuthClient.AuthRequest.Builder.class);
    }

    public static final int USERNAME_FIELD_NUMBER = 1;
    private volatile java.lang.Object username_;
    /**
     * <code>string username = 1;</code>
     * @return The username.
     */
    @java.lang.Override
    public java.lang.String getUsername() {
      java.lang.Object ref = username_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        username_ = s;
        return s;
      }
    }
    /**
     * <code>string username = 1;</code>
     * @return The bytes for username.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getUsernameBytes() {
      java.lang.Object ref = username_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        username_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int PROTOCOL_FIELD_NUMBER = 2;
    private int protocol_;
    /**
     * <code>uint32 protocol = 2;</code>
     * @return The protocol.
     */
    @java.lang.Override
    public int getProtocol() {
      return protocol_;
    }

    public static final int MOBILE_FIELD_NUMBER = 3;
    private boolean mobile_;
    /**
     * <pre>
     * Is set to true, if player is using mobile device
     * </pre>
     *
     * <code>bool mobile = 3;</code>
     * @return The mobile.
     */
    @java.lang.Override
    public boolean getMobile() {
      return mobile_;
    }

    public static final int CLIENT_FIELD_NUMBER = 4;
    private volatile java.lang.Object client_;
    /**
     * <code>string client = 4;</code>
     * @return The client.
     */
    @java.lang.Override
    public java.lang.String getClient() {
      java.lang.Object ref = client_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        client_ = s;
        return s;
      }
    }
    /**
     * <code>string client = 4;</code>
     * @return The bytes for client.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getClientBytes() {
      java.lang.Object ref = client_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        client_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int UUID_FIELD_NUMBER = 5;
    private volatile java.lang.Object uuid_;
    /**
     * <code>string uuid = 5;</code>
     * @return The uuid.
     */
    @java.lang.Override
    public java.lang.String getUuid() {
      java.lang.Object ref = uuid_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        uuid_ = s;
        return s;
      }
    }
    /**
     * <code>string uuid = 5;</code>
     * @return The bytes for uuid.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getUuidBytes() {
      java.lang.Object ref = uuid_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        uuid_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int SECRET_FIELD_NUMBER = 6;
    private volatile java.lang.Object secret_;
    /**
     * <code>string secret = 6;</code>
     * @return The secret.
     */
    @java.lang.Override
    public java.lang.String getSecret() {
      java.lang.Object ref = secret_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        secret_ = s;
        return s;
      }
    }
    /**
     * <code>string secret = 6;</code>
     * @return The bytes for secret.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getSecretBytes() {
      java.lang.Object ref = secret_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        secret_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (!getUsernameBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, username_);
      }
      if (protocol_ != 0) {
        output.writeUInt32(2, protocol_);
      }
      if (mobile_ != false) {
        output.writeBool(3, mobile_);
      }
      if (!getClientBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 4, client_);
      }
      if (!getUuidBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 5, uuid_);
      }
      if (!getSecretBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 6, secret_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getUsernameBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, username_);
      }
      if (protocol_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeUInt32Size(2, protocol_);
      }
      if (mobile_ != false) {
        size += com.google.protobuf.CodedOutputStream
          .computeBoolSize(3, mobile_);
      }
      if (!getClientBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, client_);
      }
      if (!getUuidBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(5, uuid_);
      }
      if (!getSecretBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(6, secret_);
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof AuthClient.AuthRequest)) {
        return super.equals(obj);
      }
      AuthClient.AuthRequest other = (AuthClient.AuthRequest) obj;

      if (!getUsername()
          .equals(other.getUsername())) return false;
      if (getProtocol()
          != other.getProtocol()) return false;
      if (getMobile()
          != other.getMobile()) return false;
      if (!getClient()
          .equals(other.getClient())) return false;
      if (!getUuid()
          .equals(other.getUuid())) return false;
      if (!getSecret()
          .equals(other.getSecret())) return false;
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + USERNAME_FIELD_NUMBER;
      hash = (53 * hash) + getUsername().hashCode();
      hash = (37 * hash) + PROTOCOL_FIELD_NUMBER;
      hash = (53 * hash) + getProtocol();
      hash = (37 * hash) + MOBILE_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
          getMobile());
      hash = (37 * hash) + CLIENT_FIELD_NUMBER;
      hash = (53 * hash) + getClient().hashCode();
      hash = (37 * hash) + UUID_FIELD_NUMBER;
      hash = (53 * hash) + getUuid().hashCode();
      hash = (37 * hash) + SECRET_FIELD_NUMBER;
      hash = (53 * hash) + getSecret().hashCode();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static AuthClient.AuthRequest parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static AuthClient.AuthRequest parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static AuthClient.AuthRequest parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static AuthClient.AuthRequest parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static AuthClient.AuthRequest parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static AuthClient.AuthRequest parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static AuthClient.AuthRequest parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static AuthClient.AuthRequest parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static AuthClient.AuthRequest parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static AuthClient.AuthRequest parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static AuthClient.AuthRequest parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static AuthClient.AuthRequest parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(AuthClient.AuthRequest prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * Protobuf type {@code AuthRequest}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:AuthRequest)
        AuthClient.AuthRequestOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return AuthClient.internal_static_AuthRequest_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return AuthClient.internal_static_AuthRequest_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                AuthClient.AuthRequest.class, AuthClient.AuthRequest.Builder.class);
      }

      // Construct using AuthClient.AuthRequest.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        username_ = "";

        protocol_ = 0;

        mobile_ = false;

        client_ = "";

        uuid_ = "";

        secret_ = "";

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return AuthClient.internal_static_AuthRequest_descriptor;
      }

      @java.lang.Override
      public AuthClient.AuthRequest getDefaultInstanceForType() {
        return AuthClient.AuthRequest.getDefaultInstance();
      }

      @java.lang.Override
      public AuthClient.AuthRequest build() {
        AuthClient.AuthRequest result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public AuthClient.AuthRequest buildPartial() {
        AuthClient.AuthRequest result = new AuthClient.AuthRequest(this);
        result.username_ = username_;
        result.protocol_ = protocol_;
        result.mobile_ = mobile_;
        result.client_ = client_;
        result.uuid_ = uuid_;
        result.secret_ = secret_;
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof AuthClient.AuthRequest) {
          return mergeFrom((AuthClient.AuthRequest)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(AuthClient.AuthRequest other) {
        if (other == AuthClient.AuthRequest.getDefaultInstance()) return this;
        if (!other.getUsername().isEmpty()) {
          username_ = other.username_;
          onChanged();
        }
        if (other.getProtocol() != 0) {
          setProtocol(other.getProtocol());
        }
        if (other.getMobile() != false) {
          setMobile(other.getMobile());
        }
        if (!other.getClient().isEmpty()) {
          client_ = other.client_;
          onChanged();
        }
        if (!other.getUuid().isEmpty()) {
          uuid_ = other.uuid_;
          onChanged();
        }
        if (!other.getSecret().isEmpty()) {
          secret_ = other.secret_;
          onChanged();
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        AuthClient.AuthRequest parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (AuthClient.AuthRequest) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object username_ = "";
      /**
       * <code>string username = 1;</code>
       * @return The username.
       */
      public java.lang.String getUsername() {
        java.lang.Object ref = username_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          username_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string username = 1;</code>
       * @return The bytes for username.
       */
      public com.google.protobuf.ByteString
          getUsernameBytes() {
        java.lang.Object ref = username_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          username_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string username = 1;</code>
       * @param value The username to set.
       * @return This builder for chaining.
       */
      public Builder setUsername(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        username_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string username = 1;</code>
       * @return This builder for chaining.
       */
      public Builder clearUsername() {
        
        username_ = getDefaultInstance().getUsername();
        onChanged();
        return this;
      }
      /**
       * <code>string username = 1;</code>
       * @param value The bytes for username to set.
       * @return This builder for chaining.
       */
      public Builder setUsernameBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        username_ = value;
        onChanged();
        return this;
      }

      private int protocol_ ;
      /**
       * <code>uint32 protocol = 2;</code>
       * @return The protocol.
       */
      @java.lang.Override
      public int getProtocol() {
        return protocol_;
      }
      /**
       * <code>uint32 protocol = 2;</code>
       * @param value The protocol to set.
       * @return This builder for chaining.
       */
      public Builder setProtocol(int value) {
        
        protocol_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>uint32 protocol = 2;</code>
       * @return This builder for chaining.
       */
      public Builder clearProtocol() {
        
        protocol_ = 0;
        onChanged();
        return this;
      }

      private boolean mobile_ ;
      /**
       * <pre>
       * Is set to true, if player is using mobile device
       * </pre>
       *
       * <code>bool mobile = 3;</code>
       * @return The mobile.
       */
      @java.lang.Override
      public boolean getMobile() {
        return mobile_;
      }
      /**
       * <pre>
       * Is set to true, if player is using mobile device
       * </pre>
       *
       * <code>bool mobile = 3;</code>
       * @param value The mobile to set.
       * @return This builder for chaining.
       */
      public Builder setMobile(boolean value) {
        
        mobile_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * Is set to true, if player is using mobile device
       * </pre>
       *
       * <code>bool mobile = 3;</code>
       * @return This builder for chaining.
       */
      public Builder clearMobile() {
        
        mobile_ = false;
        onChanged();
        return this;
      }

      private java.lang.Object client_ = "";
      /**
       * <code>string client = 4;</code>
       * @return The client.
       */
      public java.lang.String getClient() {
        java.lang.Object ref = client_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          client_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string client = 4;</code>
       * @return The bytes for client.
       */
      public com.google.protobuf.ByteString
          getClientBytes() {
        java.lang.Object ref = client_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          client_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string client = 4;</code>
       * @param value The client to set.
       * @return This builder for chaining.
       */
      public Builder setClient(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        client_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string client = 4;</code>
       * @return This builder for chaining.
       */
      public Builder clearClient() {
        
        client_ = getDefaultInstance().getClient();
        onChanged();
        return this;
      }
      /**
       * <code>string client = 4;</code>
       * @param value The bytes for client to set.
       * @return This builder for chaining.
       */
      public Builder setClientBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        client_ = value;
        onChanged();
        return this;
      }

      private java.lang.Object uuid_ = "";
      /**
       * <code>string uuid = 5;</code>
       * @return The uuid.
       */
      public java.lang.String getUuid() {
        java.lang.Object ref = uuid_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          uuid_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string uuid = 5;</code>
       * @return The bytes for uuid.
       */
      public com.google.protobuf.ByteString
          getUuidBytes() {
        java.lang.Object ref = uuid_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          uuid_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string uuid = 5;</code>
       * @param value The uuid to set.
       * @return This builder for chaining.
       */
      public Builder setUuid(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        uuid_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string uuid = 5;</code>
       * @return This builder for chaining.
       */
      public Builder clearUuid() {
        
        uuid_ = getDefaultInstance().getUuid();
        onChanged();
        return this;
      }
      /**
       * <code>string uuid = 5;</code>
       * @param value The bytes for uuid to set.
       * @return This builder for chaining.
       */
      public Builder setUuidBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        uuid_ = value;
        onChanged();
        return this;
      }

      private java.lang.Object secret_ = "";
      /**
       * <code>string secret = 6;</code>
       * @return The secret.
       */
      public java.lang.String getSecret() {
        java.lang.Object ref = secret_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          secret_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string secret = 6;</code>
       * @return The bytes for secret.
       */
      public com.google.protobuf.ByteString
          getSecretBytes() {
        java.lang.Object ref = secret_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          secret_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string secret = 6;</code>
       * @param value The secret to set.
       * @return This builder for chaining.
       */
      public Builder setSecret(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        secret_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string secret = 6;</code>
       * @return This builder for chaining.
       */
      public Builder clearSecret() {
        
        secret_ = getDefaultInstance().getSecret();
        onChanged();
        return this;
      }
      /**
       * <code>string secret = 6;</code>
       * @param value The bytes for secret to set.
       * @return This builder for chaining.
       */
      public Builder setSecretBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        secret_ = value;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:AuthRequest)
    }

    // @@protoc_insertion_point(class_scope:AuthRequest)
    private static final AuthClient.AuthRequest DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new AuthClient.AuthRequest();
    }

    public static AuthClient.AuthRequest getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<AuthRequest>
        PARSER = new com.google.protobuf.AbstractParser<AuthRequest>() {
      @java.lang.Override
      public AuthRequest parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new AuthRequest(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<AuthRequest> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<AuthRequest> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public AuthClient.AuthRequest getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_AuthRequest_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_AuthRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\027proto/auth-client.proto\"o\n\013AuthRequest" +
      "\022\020\n\010username\030\001 \001(\t\022\020\n\010protocol\030\002 \001(\r\022\016\n\006" +
      "mobile\030\003 \001(\010\022\016\n\006client\030\004 \001(\t\022\014\n\004uuid\030\005 \001" +
      "(\t\022\016\n\006secret\030\006 \001(\tb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_AuthRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_AuthRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_AuthRequest_descriptor,
        new java.lang.String[] { "Username", "Protocol", "Mobile", "Client", "Uuid", "Secret", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
