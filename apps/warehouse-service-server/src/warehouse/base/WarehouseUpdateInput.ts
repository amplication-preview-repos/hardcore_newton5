/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested, IsString } from "class-validator";
import { InventoryUpdateManyWithoutWarehousesInput } from "./InventoryUpdateManyWithoutWarehousesInput";
import { Type } from "class-transformer";
import { ProductUpdateManyWithoutWarehousesInput } from "./ProductUpdateManyWithoutWarehousesInput";
import { ShipmentUpdateManyWithoutWarehousesInput } from "./ShipmentUpdateManyWithoutWarehousesInput";

@InputType()
class WarehouseUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: () => InventoryUpdateManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => InventoryUpdateManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => InventoryUpdateManyWithoutWarehousesInput, {
    nullable: true,
  })
  inventories?: InventoryUpdateManyWithoutWarehousesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  manager?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutWarehousesInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutWarehousesInput;

  @ApiProperty({
    required: false,
    type: () => ShipmentUpdateManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => ShipmentUpdateManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => ShipmentUpdateManyWithoutWarehousesInput, {
    nullable: true,
  })
  shipments?: ShipmentUpdateManyWithoutWarehousesInput;
}

export { WarehouseUpdateInput as WarehouseUpdateInput };